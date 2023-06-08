import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section style={chat}>
      <textarea
        style={{height:'150px', width: '250px'}}
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <hr/>
      <button>Send to {contact.email}</button>
    </section>
  );
}

const chat = {
    float: 'left',
    marginBottom: '20px',
  }