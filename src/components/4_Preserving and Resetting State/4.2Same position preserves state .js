import { useState } from 'react';

export default function SamePosPreservesState() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div style={{width: '550px', margin: '10px'}}>
        <h2>2. Такой же компонент в той же позиции сохраняет состояние</h2>
        <p>В этом примере есть два разных тега 'Counter':</p>
        <div className="code">
        <code style={{whiteSpace: 'pre-wraps'}}>
            {code}
        </code>
      </div>
      {isFancy ? (
        <Counter isFancy={true} /> 
      ) : (
        <Counter isFancy={false} /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
     <p>Это такой же компонент в той же позиции, поэтому с точки зрения React это тот же счетчик.</p>
      <p><b>Для React важна позиция в дереве пользовательского интерфейса, а не в разметке JSX!</b> Этот компонент имеет <b>два return</b> предложения с разными 'Counter'тегами JSX внутри и снаружи if:</p>
      <div className="code">
        <code style={{whiteSpace: 'pre-wraps'}}>
            {code2}
        </code>
        </div>
      <p>Для React эти два счетчика имеют один и тот же «адрес»: первый дочерний элемент первого дочернего элемента корня. </p>
       <p>Вот как React сопоставляет их между предыдущим и следующим рендерингом, независимо от того, как вы структурируете свою логику.</p>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
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

const code = `{isFancy ? (
    <Counter isFancy={true} /> 
  ) : (
    <Counter isFancy={false} /> 
  )}`

  const code2 = `if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
    )
  }
  return (
    <div>
      <Counter isFancy={false} />
        <input/> 
    </div>
    )`