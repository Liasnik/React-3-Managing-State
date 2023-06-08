import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  //  const [isSending, setIsSending] = useState(false);
  //  const [isSent, setIsSent] = useState(false);
  //вместо этих двух состояний мы делаем одно - status:
  const [status, setStatus] = useState('typing');

async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return (
      <div style={{maxWidth: '400px', margin: '10px'}}>
        <h2><i>2. Avoid contradictions in state</i></h2>
        <h2><i>Избегайте противоречий в состоянии</i></h2>
        <p>Когда состояние структурировано таким<br/> образом, что несколько частей состояния могут противоречить и «не согласовываться» друг с другом, вы оставляете место для ошибок. Постарайтесь избежать этого.</p>
        <div style={{height: '220px'}}>
        <h1 style={{color: 'blue', marginTop: '40px'}}>
          Thanks for feedback!
        </h1>
        <button onClick={() => setStatus('typing')}>
         to feedback form
        </button>
        </div>
        <div className='code'>
         <code>{code}</code>
        </div>
        <p>Поскольку <b>isSending</b> и <b>isSent</b> &nbsp;никогда не должны быть <b><i>true</i></b> <br/> одновременно, лучше заменить их одной переменной состояния  <br/> <b><i>status</i></b> , которая может принимать одно из трех допустимых<br/> состояний: <b><i>'typing'</i></b> (начальное),<b><i>'sending'</i></b> и <b><i>'sent'</i></b>.</p>
    </div>
    )
  }

  return (
    <div style={{maxWidth: '400px', margin: '10px'}}>
    <h2><i>2. Avoid contradictions in state</i></h2>
    <h2><i>Избегайте противоречий в состоянии</i></h2>
    <p>Когда состояние структурировано таким<br/> образом, что несколько частей состояния могут противоречить и «не согласовываться» друг с другом, вы оставляете место для ошибок. Постарайтесь избежать этого.</p>
    <form onSubmit={handleSubmit} style={{height: '230px', paddingTop: '10px'}}>
      <h4><i>How was your stay at The Prancing Pony?</i></h4>
      <textarea
        
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        onClick={handleSubmit}
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
    <div className='code'>
      <code>{code}</code>
    </div>
    <p>Поскольку <b>isSending</b> и <b>isSent</b> 
    &nbsp;никогда не должны быть <b><i>true</i></b> <br/> 
    одновременно, лучше заменить их одной переменной состояния  
     <br/> <b><i>status</i></b> , которая может принимать одно из трех допустимых
     <br/> состояний: <b><i>'typing'</i></b> (начальное),
      <b><i>'sending'</i></b> и <b><i>'sent'</i></b>.</p>
    </div>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

const code = `export default function FeedbackForm() {
  const [text, setText] = useState('');
  //const [isSending, setIsSending] = useState(false);
  //const [isSent, setIsSent] = useState(false);
  const [status, setStatus] = useState('typing');
`