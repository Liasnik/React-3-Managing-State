import { useState } from 'react';

export default function Scoreboard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div  style={{width: '600px', margin: '10px'}}>
        <div>
            <h2>4. Сброс состояния в том же положении</h2>
            <p>По умолчанию React сохраняет состояние компонента, пока он остается в том же положении. Обычно это именно то, что вам нужно, поэтому это имеет смысл в качестве поведения по умолчанию. Но иногда вам может понадобиться сбросить состояние компонента. Рассмотрим это приложение, которое позволяет двум игрокам отслеживать свои очки во время каждого хода:</p>
            {isPlayerA ? (
                <Counter person="Taylor" />
            ) : (
                <Counter person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
            <div className="code" style={{margin: '57px 0 0 200px', transform: 'rotate(12deg)'}}>
                <code >
                    {code}
                </code>
            </div> 
        </div>
        <h3 style={{marginTop: '100px'}}>Вариант 1: визуализация компонента в разных позициях</h3>
        <p>Если вы хотите, чтобы эти два Counters были независимыми, вы можете отображать их в двух разных позициях:</p>
        <div className="code">
            <code >
                {code2}
            </code>
        </div> 
        <p>Изначально isPlayerA true. Итак, первая позиция содержит Counter состояние, а вторая пуста.</p>
        <p>Когда вы нажимаете кнопку «Следующий игрок», первая позиция очищается, но вторая теперь содержит Counter.</p>
        <h3 style={{marginTop: '50px'}}>Вариант 2: Сброс состояния с помощью ключа</h3>
        <p>Это более универсальный способ:</p>
        {isPlayerA ? (
                <Counter key='2' person="Taylor" />
            ) : (
                <Counter key='1' person="Sarah" />
            )}
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
                Next player!
            </button>
            <div className="code" style={{margin: '57px 0 0 200px', transform: 'rotate(7deg)'}}>
                <code >
                    {code3}
                </code>
            </div>
    </div>
  );
}

function Counter({ person }) {
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
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

const code = ` {isPlayerA ? (
     <Counter person="Taylor" />
    ) : (
      <Counter person="Sarah" />
    )}`
const code2 = `  return (
    <div>
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {!isPlayerA &&
        <Counter person="Sarah" />
      }`

const code3 = ` {isPlayerA ? (
<Counter key='2' person="Taylor" />
) : (
    <Counter key='1' person="Sarah" />
)}`
