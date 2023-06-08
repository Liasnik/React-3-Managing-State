import { useState } from 'react';
import { questions } from './4_1Questions';

export default function AllStates3() {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('typing');

  function chooseQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentQuestion(questions[randomIndex])
    setError(null)
    setAnswer('')
    setStatus('tiping')
    setSubmitting(false)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      setError(null)
      await submitForm(answer, currentQuestion.answer);
      setStatus('success');
    } catch (err) {
      //setStatus('error')
      setError(err);
    }
    setSubmitting(false);
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function handleReset() {
    //chooseQuestion()
    setAnswer('')
    setStatus('tiping')
    setError(null)
  }

  // function handleNextQuestion() {
  //   chooseQuestion()
  // }

  if (status === 'success') {
     return (
    <div style={{ width: '300px' }}>
      <h1 className='Success'>{`That's right! This is ${currentQuestion.answer}!`}</h1>
      {/* <button onClick={handleReset}>Back to the quianswerz</button> */}
      <button onClick={chooseQuestion}>Next question</button>
    </div>
     )
  }

  if (!currentQuestion) {
    chooseQuestion()
    return null
  }

  return (
    <div style={{ width: '300px', margin: '10px' }}>
        <h2>3. Quiz</h2>
        <div style={{ width: '300px', minHeight: '80px' }}>
        <p>
            { currentQuestion.question }
        </p>
        </div>
        <form onSubmit={handleSubmit}>
        <input
            value={answer}
            onChange={handleTextareaChange}
            disabled={ status === 'submitting' || submitting }
        />
        <br />
        <button disabled={
            answer.length === 0 ||
            status === 'submitting' ||
            submitting
        }>
            { submitting ? 'Submitting...' : 'Submit'} 
        </button>
        <button disabled={
            answer.length === 0 ||
            submitting}
            type='button' 
            onClick={handleReset}>
            Reset
        </button>
        <button disabled={
            status === 'submitting' ||
            submitting}
            type='button' 
            onClick={chooseQuestion}>
            Next question
        </button>
        {submitting && 
            <p>Loadin...</p>
        }
        {error !== null && 
            <p className="Error">
            {error.message}
            </p>
        }
        </form>
    </div>
  );
}

function submitForm(answer, correctAnswer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase().trim() !== correctAnswer.toLowerCase().trim()
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}