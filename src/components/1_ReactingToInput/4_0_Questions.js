import { useState } from "react";

export default function ReactingToInput({ questions }) {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [count, setCount] = useState(0)
  
    async function handleSubmit(e) {
      e.preventDefault();
      setStatus("submitting");
      try {
        setError(null);
        await submitForm(answer, questions[currentQuestionIndex].answer);
        setCount(count => count + 1)
        setStatus("success");
      } catch (err) {
        setStatus("typing");
        setError(err);
      }
    }
  
    function handleTextareaChange(e) {
      setAnswer(e.target.value);
    }
  
    function handleReset() {
      setAnswer("");
      setStatus("typing");
      setError(null);
    }
  
    function handleNextQuestion() {      
      setCurrentQuestionIndex((currentIndex) => currentIndex + 1)
      setAnswer("");
      setStatus("typing");
      setError(null);      
    } 

    let endingMessage
    if (count > 15) {
        endingMessage = 'Success'
    } else if ( count > 9) {
        endingMessage = 'noSuccess'
    } else if ( count > 6) {
        endingMessage = 'Bad'
    } else (
        endingMessage = "Error"
    )
    
    // function handlePreQuestion() {
    //   if (currentQuestionIndex === 0) {
    //     return
    //   }
    //   setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
    //   setAnswer("");
    //   setStatus("typing");
    //   setError(null);
    // }
  
    function handleStartOver() {  
        setCurrentQuestionIndex((currentIndex) => currentIndex = 0);
        setAnswer("");
        setStatus("typing");
        setError(null);
        setCount(0)
    }
  
    if (status === "success") {
      return (
        <div style={{ width: "300px" }}>
          <h1 className='Success'>That's right!</h1>
          <h3 style={{ color: 'darkblue' }}>{`points: ${count}`}</h3>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={ handleNextQuestion }>Next question</button>
          ) : (
            <>
            <h2 className={ endingMessage }>All questions completed!</h2>
            <h1 className={ endingMessage }>
              { `your result: ${count} / ${questions.length}` }
            </h1>
            <button onClick={ handleStartOver }>Start Over</button>
            </>
          )}
        </div>
      );
    }
  
    else if (currentQuestionIndex === questions.length) {
      return (
        <div style={{ width: "400px" }}>
          <h2 className={endingMessage}>All questions completed!</h2>
          <h1 className={endingMessage}>
            {`your result: ${count} / ${questions.length}`}
          </h1>
          <button onClick={handleStartOver}>Start Over</button>
        </div>)
    }
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div style={{ width: "400px" }}>
        <h2>4. Questions</h2>
        <h3 style={{ color: 'darkblue' }}>Question { currentQuestionIndex + 1} </h3>
        <div style={{ width: '300px', minHeight: '50px' }}>
          <p>{currentQuestion.question}</p>
        </div>
        <h3 style={{ color: 'darkblue' }}>{`points: ${count} / ${questions.length}`}</h3>
        {/* <button
            disabled={status === "submitting"}
            onClick={handlePreQuestion}
          >
            Pre question
          </button> */}
        <form onSubmit={handleSubmit}>
          <input
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
          />
          <br />
          <button
            disabled={
              answer.length === 0 || status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
          <button
            disabled={answer.length === 0 || status === "submitting"}
            type="button"
            onClick={handleReset}
          >
            Clear out
          </button>
          <button
            type='button'
            disabled={status === "submitting"}
            onClick={handleNextQuestion}
          >
            Next question
          </button>
          {status === "submitting" && <p>Loading...</p>}
          {error !== null && <p className="Error">{ error.message }</p>}
        </form>
        {text}
      </div>
    );
  }
  
  function submitForm(answer, expectedAnswer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase().trim() !== expectedAnswer.toLowerCase().trim();
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1000);
    });
  }

  const text = <div style={{marginTop: '100px'}}>
    <h2>Резюме</h2>
    <h3> 
      При разработке компонента:
    </h3> 
    <h4>
       Определите все его визуальные состояния.
      </h4>
    <h4>
      Определите триггеры человека и компьютера для изменения состояния.
      </h4>
    <h4>
      Смоделируйте состояние с помощью useState.
      </h4>
    <h4>
      Удалите несущественное состояние, чтобы избежать ошибок и парадоксов.
      </h4>
    <h4>
      Подключите обработчики событий для установки состояния.
      </h4>
  </div> 
    