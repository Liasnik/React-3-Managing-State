import { useState } from 'react';
import Counters from './Task_3Exra';


export default function Synced() {
  const [text, setText] = useState('');
 
  return (
    <div style={{margin: '60px 10px 10px 10px '}}>
        <h3>1.2 Synced Inputs</h3>
      <Input
         label="First input"
         value={text}
         handleChange={e => setText(e.target.value)} 
      />
      <Input
        label="Second input"
        value={text} 
        handleChange={e => setText(e.target.value)} 
      />
      <Counters/>
    </div>
  );
}

function Input({ label, value, handleChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}


// Тоже, только обработчик снаружи:

// export default function SyncedInputs() {
//     const [text, setText] = useState('');
     
//     function handleChange(e) {
//       setText(e.target.value);
//     }  
  
//     return (
//       <>
//         <Input label="First input" text={text} handleChange={handleChange}/>
//         <Input label="Second input" text={text}  handleChange={handleChange}/>
//       </>
//     );
//   }