import React, { useState } from "react";
import Card from "./Card";

const CounterChar2 = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [arrayNew, setArrayNew] = useState([]);
  const [integer, setInteger] = useState(0);
  
  const inputArray = () => {
    setArrayNew((prevArrayNew) => [...prevArrayNew, integer]);
    setInteger((prevInteger) => prevInteger + 1);
  };

  const lengthArray = arrayNew.length;

  return (
    <div className='Vue-vs-React'>
      <div className="blue">hi</div>
      <input
        type="text"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onInput={inputArray}
      />
      {lengthArray > 4 && <div className="green">{lengthArray}</div>}
      <div className="red">{currentValue}</div>
      {arrayNew.map((item, index) => (
        <div key={index} className="red">
          {item}
        </div>
      ))}
      <Card card={mycard} />
    </div>
  );
};

const mycard = {
  name: "Sasha",
  description: "JS developer",
};

export default CounterChar2;