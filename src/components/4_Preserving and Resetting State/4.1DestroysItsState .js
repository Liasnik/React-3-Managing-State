import { useState } from 'react';

export default function DestroysItsState() {
  const [showB, setShowB] = useState(true);
  return (
    <div style={{width: '550px', margin: '10px'}}>
        <h2>1. Состояние привязано к положению в дереве</h2>
        <h3>React Destroys its State</h3>
        <p>React будет сохранять состояние до тех пор, пока вы визуализируете один и тот же компонент в одной и той же позиции.</p>
      <Counter />
      {showB && <Counter />} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
      <p>Когда React удаляет компонент, он уничтожает его состояние.</p>
      <p><b>React сохраняет состояние компонента до тех пор, пока он отображается в своей позиции в дереве пользовательского интерфейса.</b> Если он удаляется или <b>другой компонент</b> отображается в той же позиции, React сбрасывает его состояние.</p>
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
      <h2>{score}</h2>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
      <button onClick={ () => setScore(score - 1) }>
        Dim one
      </button>
    </div>
  );
}
