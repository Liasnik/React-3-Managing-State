import { useState } from 'react';

export default function Counters() {
  const [score, setScore] = useState(0);
  const [showB, setShowB] = useState(true);

  const counter = <Counter
                    score={score}
                    onClick={() => setScore(score + 1)} 
                    onClick1={() => setScore(score - 2)}
                  />;
  return (
    <div style={{marginTop: '70px'}}>
        <h2>3. Extra Task - Synced Counter</h2>
        <div>
        <input
        type="checkbox"
        checked={showB}
        onChange={(e) => {
            setShowB(e.target.checked);
        }}
        />
        Render the second counter
    </div>
        {counter}
        {showB && counter}
    </div>
  );
}

function Counter({ score, onClick1,  onClick }) {
  
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
      <h3>{score}</h3>
      <button onClick={ onClick }>
        Add one
      </button>
      <button onClick={ onClick1 }>
        Diminish two
      </button>
    </div>
  );
}