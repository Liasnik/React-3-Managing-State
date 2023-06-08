import { useState, useEffect } from 'react';
import Clock from './Task_1.1Clock.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Chellenge1() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <h2>Task-1 Don’t mirror props in state</h2>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e => setColor(e.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
      <div className='code'>
       <code>{code}</code>
      </div>
      <div className="sp-wrapper">
      <span className="accent">Проблема в том, что этот компонент имеет состояние color, <br/>инициализированное начальным значением свойства color.<br/>Но когда свойствао color меняется, это не влияет на<br/> переменную состояния! Поэтому они выходят из строя. <br/>Чтобы решить эту проблему, нужно полностью удалить <br/>переменную состояния и использовать свойство color напрямую.</span>
      </div>
      <div className='code'>
        <code>{code2}</code>
      </div>
    </div>
  );
}

const code = `import { useState, useEffect } from 'react';
import Clock from './Clock.js';

export default function Clock(props) {
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}`

const code2 = `export default function Clock(props) {
  return (
    <h1 style={{ color: props.color }}>
      {props.time}
    </h1>
  );
}`