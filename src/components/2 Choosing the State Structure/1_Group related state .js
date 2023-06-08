import { useState} from 'react';
//import { useEffect, useRef} from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
  
    function handlePointerMove(e) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
  
      setPosition({
        x: offsetX,
        y: offsetY
      });
    }
  
    return (
        <div style={{maxWidth: '400px', margin: '10px'}}>
            <h2><i>1. Group related state</i></h2>
            <h2><i>Состояние, связанное с группой</i></h2>
            <p>Если вы всегда одновременно обновляете две или более  переменных <br/>состояния, подумайте об объединении их в одну переменную состояния.</p>
      <div
        style={{
          maxWidth: '350px',
          height: '220px',
          position: 'relative',
          overflow: 'hidden',
          padding: '10px',
          backgroundColor: 'rgb(103, 197, 198)'
        }}
        onMouseMove={handlePointerMove}
      >
        <code style={{ whiteSpace: "pre-wrap" }}>{code}</code>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
            pointerEvents: 'none', // Чтобы кружок не мешал перемещать указатель мыши
            transition: 'transform 0.1s ease', // Плавный переход для плавности движения
            willChange: 'transform', // Оптимизация производительности для плавности анимации
          }}
        />
      </div>
      <p>Если какие-то две переменные состояния всегда изменяются вместе,<br/>можно (даже нужно) объединить их в одну переменную состояния.
      </p>
      <div className='code'>
        <code>{code2}</code>
      </div>
      <p>Другой случай, когда нужно группировать данные в объект или <br/>массив, — это когда сразу не известно сколько частей состояния <br/>понадобится. Например, когда есть форма, в которой пользователь <br/>может добавлять настраиваемые поля.</p>
      </div>
    );
  }

  const code = `Должны ли мы это сделать?

const [x, setX] = useState(0);
const [y, setY] = useState(0);

Или это?
  
const [position, setPosition] = useState({ x: 0, y: 0 });
`

const code2 = `function MovingDot() {
  const [position, setPosition] = useState({x: 0, y: 0})
  
  function handlePointerMove(e) {
    setPosition({x: e.clientX, y: e.clientY
    })
  }
`

// export default function MovingDot() {
//     const [position, setPosition] = useState({
//       x: 0,
//       y: 0
//     });
  
//     function handlePointerMove(e) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;
  
//       setPosition({
//         x: offsetX,
//         y: offsetY
//       });
//     }
  
//     return (
//       <div
//         style={{
//           width: '150px',
//           height: '150px',
//           position: 'relative',
//         }}
//         onMouseMove={handlePointerMove}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             backgroundColor: 'red',
//             borderRadius: '50%',
//             transform: `translate(${position.x}px, ${position.y}px)`,
//             left: -10,
//             top: -10,
//             width: 20,
//             height: 20,
//           }}
//         />
//       </div>
//     );
//   }

// export default function MovingDot() {
//     const [position, setPosition] = useState({
//       x: 0,
//       y: 0
//     });
  
//     function handlePointerMove(e) {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     }
  
//     return (
//       <div
//         style={{
//           width: '150px',
//           height: '150px',
//           margin: '0',
//           padding: '0',
//           position: 'relative',
//         }}
//         onPointerMove={handlePointerMove}
//       >
//         <div
//           style={{
//             position: 'absolute',
//             backgroundColor: 'red',
//             borderRadius: '50%',
//             transform: `translate(${position.x}px, ${position.y}px)`,
//             left: -10,
//             top: -10,
//             width: 20,
//             height: 20,
//           }}
//         />
//       </div>
//     );
//   }


// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });

//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const handlePointerMove = (e) => {
//       const rect = container.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;

//       setPosition({
//         x: offsetX,
//         y: offsetY
//       });
//     };

//     container.addEventListener('pointermove', handlePointerMove);

//     return () => {
//       container.removeEventListener('pointermove', handlePointerMove);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         width: '150px',
//         height: '150px',
//         position: 'relative',
//       }}
//       ref={containerRef}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           backgroundColor: 'red',
//           borderRadius: '50%',
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           left: -10,
//           top: -10,
//           width: 20,
//           height: 20,
//         }}
//       />
//     </div>
//   );
// }


// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div style={{width: '150px', height: '150px'}}>
//         <div
//         onPointerMove={e => {
//             setPosition({
//             x: e.clientX,
//             y: e.clientY
//             });
//         }}
//         style={{
//             position: 'relative',
//             width: '100vw',
//             height: '100vh',
//         }}>
//         <div style={{
//             position: 'absolute',
//             backgroundColor: 'red',
//             borderRadius: '50%',
//             transform: `translate(${position.x}px, ${position.y}px)`,
//             left: -10,
//             top: -10,
//             width: 20,
//             height: 20,
//         }} />
//         </div>
//     </div>
//   )
// }
