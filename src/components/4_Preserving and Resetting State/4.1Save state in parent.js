import { useState } from 'react';

export default function SaveStateInParent() {
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const [showB, setShowB] = useState(true);

  return (
    <div>
      <h3>Save State in parent</h3>
      <p>Сохранил состояние на основе принципов из предыдущей темы.</p>
        <Counter
          score={score}
          onClick={() => setScore(score + 1)}
          onClick1={() => setScore(score - 2)}
        />
        {showB &&  
          <Counter
            score={score2}
            onClick={() => setScore2(score2 + 1)}
            onClick1={() => setScore2(score2 - 2)}
          />
      }
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter({ score, onClick1, onClick, onClick2, onClick3 }) {
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h2>{score}</h2>
      <button onClick={onClick}>Add one</button>
      <button onClick={onClick1}>Diminish two</button>
    </div>
  );
}