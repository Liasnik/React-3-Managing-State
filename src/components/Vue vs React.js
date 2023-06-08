//import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

export default function CounterChar() {
  const [currentValue, setCurrentValue] = useState("");
  const [counts, setCounts] = useState([]);

//   let numerator = counts.map((count, index) => <p key={index + 1}>{count}</p>)
  
  const count = currentValue.length;
  
  let numerator = []
  let i = 0
  while(i < currentValue.length) {
    i++
    numerator += i;
  }

  let j = 0

  return (
    <div className='Vue-vs-React'>
      <p className="green">hi</p>
      <input
        onChange={(e) => {
          setCurrentValue(e.target.value);
         setCounts([...counts, count]);
        }}
      />
     <h4 className="blue">count: {count}</h4>
      <p className="red">{currentValue}</p>
      {numerator} 
      {/* {counts.map((count, index) => 
       <p key={index}>{index + 1}</p>,
         )}  */}
      {counts.map(() => 
         <p>{j += 1}</p>
       )} 
    
      {/* {counts.map((count, index) => {
       if (index > 0) {
         return <p key={index}>{count}</p>;
        }
        return null;
          })}  */}
           <Card card={mycard} />  
    </div>
  );
}

const mycard = {
    name: "Sasha",
    description: "JS developer",
  };

// export default function App() {
//   const [currentValue, setCurrentValue] = useState("");
//   const [counts, setCounts] = useState([]);

//   useEffect(() => {
//     setCounts(prevCounts => [...prevCounts, currentValue.length]);
//   }, [currentValue]);

//   const handleInputChange = (e) => {
//     setCurrentValue(e.target.value);
//   };

//   return (
//     <div className="App">
//       <p>hi</p>
//       <input onChange={handleInputChange} />
//       {/* {currentValue.length > 4 && ( */}
//         <h4 style={{ color: "green" }}>count: {currentValue.length}</h4>
//       {/* )} */}
//       <p className="red">{currentValue}</p>
//       {counts.slice(1).map((count, index) => (
//         <p key={index}>{count}</p>
//       ))}
//     </div>
//   );
// }