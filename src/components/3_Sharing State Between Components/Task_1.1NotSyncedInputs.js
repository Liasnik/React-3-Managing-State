import { useState } from 'react';

export default function NotSyncedInputs() {
  return (
    <div style={{margin: '10px'}}>
      <h2>1. Synced inputs</h2>
      <h3>1.1 Not Synced Inputs</h3>
      <Input label="First input" />
      <Input label="Second input" />
    </div>
  );
}

function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}
