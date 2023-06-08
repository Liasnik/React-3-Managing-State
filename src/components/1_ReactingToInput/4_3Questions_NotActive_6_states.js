import { useState } from "react";

export default function ReactingToInput({ questions }) {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState("typing");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [count, setCount] = useState(0)
  
    async function handleSubmit(e) {
      e.preventDefault();
      setSubmitting(true);
      try {
        setError(null);
        await submitForm(answer, questions[currentQuestionIndex].answer);
        setCount(count => count + 1)
        setStatus("success");
      } catch (err) {
        setStatus("typing");
        setError(err);
      }
      setSubmitting(false);
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
          <h3 >{ `points: ${count}` }</h3>
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
        <div style={ {width: "400px"} }>
          <h2 className={ endingMessage }>All questions completed!</h2>
          <h1 className={ endingMessage }>
            { `your result: ${count} / ${questions.length}` }
          </h1>
          <button onClick={ handleStartOver }>Start Over</button>
        </div>)
    }
  
    const currentQuestion = questions[currentQuestionIndex];
  
    return (
      <div style={{ width: "400px" }}>
        <h2>Question { currentQuestionIndex + 1} </h2>
        <div style={{ width: '300px', minHeight: '50px' }}>
          <p>{ currentQuestion.question }</p>
        </div>
        <h3 >{ `points: ${count} / ${questions.length}` }</h3>
        {/* <button
            disabled={submitting}
            onClick={handlePreQuestion}
          >
            Pre question
          </button> */}
        <form onSubmit={handleSubmit}>
          <input
            style={{ margin: '7px',  padding: '5px', fontSize: "18px" }}
            value={ answer }
            onChange={ handleTextareaChange }
            disabled={ status === "submitting" || submitting }
          />
          <br />
          <button
            disabled={
              answer.length === 0 || status === "submitting" || submitting
            }
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          <button
            disabled={ answer.length === 0 || submitting }
            type="button"
            onClick={ handleReset }
          >
            Clear out
          </button>
          <button
            type='button'
            disabled={ submitting }
            onClick={ handleNextQuestion }
          >
            Next question
          </button>
          { submitting && <p>Loading...</p> }
          { error !== null && <p className="Error">{ error.message }</p> }
        </form>
         
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
      }, 700);
    });
  }