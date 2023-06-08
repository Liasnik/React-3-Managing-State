import { useState } from 'react';

// export default function Picture() {
//     const [active, setActive] = useState(false);
    
//     let className = "background background--active";
//     let imgClassName = "picture";
//     if (active) {
//         className = "background" ;
//         imgClassName = "picture picture--active";
//     }
    
//     return (
//         <div className={className} onClick={() => setActive(false)}>
//         <img
//             onClick={(e) => {e.stopPropagation(); setActive(true)}}
//             className={imgClassName}
//             alt="Rainbow houses in Kampung Pelangi, Indonesia"
//             src="https://i.imgur.com/5qwVYb1.jpeg"
//         />
//         </div>
//     );
// }


// Из учебника:
// export default function Picture() {
//     const [active, setActive] = useState(false);
    
//     let bgClassName = "background"
//     let imgClassName = "picture"
//     if (active) {
//         imgClassName += " picture--active"
//     }  
//      else   bgClassName += " background--active" 
  
//     return (
//         <div className={bgClassName} onClick={() => setActive(false)}>
//         <img
//             onClick={(e) => {e.stopPropagation(); setActive(true)}}
//             className={imgClassName}
//             alt="Rainbow houses in Kampung Pelangi, Indonesia"
//             src="https://i.imgur.com/5qwVYb1.jpeg"
//         />
//         </div>
//     );
// }

// export default function Picture() {
//     const [isActive, setIsActive] = useState(true);

//     let backgrClass = isActive ? 'background background--active' : 'background'
//     let imgClass = isActive ? 'picture' : 'picture picture--active'
  
//     function handleClassImg(e) {
//         e.stopPropagation()
//         setIsActive(false);
//     }
  
//     function handleClassDiv() {
//         setIsActive(true);
//     }
  
//     return (
//       <div className={backgrClass} onClick={handleClassDiv}>
//         <img  className={imgClass} onClick={handleClassImg}
//           alt="Rainbow houses in Kampung Pelangi, Indonesia"
//           src="https://i.imgur.com/5qwVYb1.jpeg"
//         />
//       </div>
//     );
//   }

// Этот код не работал потому что, переменные обновлялись в функциях
// обработчиках кликов получается после ререндера или скорее без него вообще
// или как-то не в тот момент похоже когда состояние менялось или наоборот вместе
// или перед немного хотя даже setActive(...) после стоял...  (короче 
// обновление без изменения состояния - это не обновление, а хрень собачья!)
// вот такое не работает вобщем!:
// function getClassImg(e) {
//     e.stopPropagation()
//     if (active) {
//         classDiv = 'background';
//         classImg = 'picture picture--active';
//     }  
//     setActive(true);
// }

export default function Picture() {
    const [active, setActive] = useState(false);
    
    let classDiv = 'background background--active';
    let classImg = 'picture';

    if (active) {
        classDiv = 'background';
        classImg = 'picture picture--active';
    }
    
    function getClassImg(e) {
        e.stopPropagation()  
        setActive(true);
    }

    function getClassDiv() {
        setActive(false);
    }

    return (
        <div>
            <h2>Challenge_1</h2>
            <div className={classDiv} onClick={getClassDiv}>
            <img  className={classImg} onClick={getClassImg}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
        </div>
    );
}

// с двумя useState:
// export default function Picture() {
//   const [divClass, setDivClass] = useState("background background--active");
//   const [imgClass, setImgClass] = useState("picture");

//   function handleDivClick() {
//       setDivClass('background background--active')
//       setImgClass('picture')
//     }
    
//     function handleImgClick(event) {
//       event.stopPropagation()
//       setDivClass('background')
//       setImgClass('picture picture--active')
//     }
    
//   return (
//     <div className={divClass} onClick={handleDivClick} >
//       <img
//         onClick={handleImgClick}
//         className={imgClass}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

// export default function Picture() {
//     const [active, setActive] = useState(false);
    
//     function handleClick(event) {
//       event.stopPropagation(); // остановить всплытие события
//       setActive(true);
//     }
    
//     let className = "background background--active";
//     let imgClassName = "picture";
//     if (active) {
//       className = "background";
//       imgClassName += " picture--active";
//     }
  
//     return (
//       <div className={className} onClick={() => setActive(false)}>
//         <img
//           onClick={handleClick}
//           className={imgClassName}
//           alt="Rainbow houses in Kampung Pelangi, Indonesia"
//           src="https://i.imgur.com/5qwVYb1.jpeg"
//         />
//       </div>
//     );
// }

