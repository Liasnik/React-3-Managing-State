import { useState } from 'react';

export default function DifferentСomponents() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div >
        <div style={{display: 'flex'}}>
            <div className="code">
                <code style={{whiteSpace: 'pre-wraps'}}>
                    {code}
                </code>
            </div>         
        </div>
      {isPaused ? (
        <p>See you later!</p> 
      ) : (
        <Counter /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

const code = `1. 
{isPaused ? (
    <p>See you later!</p> 
  ) : (
    <Counter /> 
  )}`
