import { useState } from 'react';
import Chat from './4.5.2Chat.js';
import ContactList from './4.5.1ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div style={{width: '450px'}}>
      <h2>5. Сброс формы с помощью ключа</h2>
      <p>Сброс состояния с помощью ключа особенно полезен при работе с формами.</p>
      <div className='code'>
        <code>{code}</code>
      </div>
      <ContactList
        contacts={contacts}
        // selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
      {resume}
    </div>
  )
}

const code = `<Chat key={to.id} contact={to} />`

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

const resume = <div>
  <h2>Резюме</h2>
  <p><b>React сохраняет состояние до тех пор, пока один и тот же компонент отображается в одной и той же позиции.</b></p>
  <p><b>Состояние не сохраняется в тегах JSX. Он связан с позицией дерева, в которую вы помещаете этот JSX.</b></p>
  <p><b>Вы можете заставить поддерево сбросить свое состояние, назначив ему другой ключ.</b></p>
  <p><b>Не вкладывайте определения компонентов, иначе вы случайно сбросите состояние.</b></p>
</div>
