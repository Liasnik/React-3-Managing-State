// import { useReducer } from 'react';
import Chat from './Chat.js'
import ContactList from './ContactList.js'
import { initialState, messengerReducer } from './messengerReducer'
import { contacts } from './data.js'
import { useReducer } from './MyReact.js'

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.messages[state.selectedId]
  const contact = contacts.find((c) => c.id === state.selectedId)
  return (
    <div className='dubleDiv'>
    <div>
        <h2>Exercises 'Messenger':</h2>
        <p>1. Отправка действий из обработчиков событий</p>
        <p>2. Очистить ввод при отправке сообщения</p>
        <p>3. Восстановление входных значений при переключении между вкладками</p>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
    <div>
    <p>4. Внедрить useReducer с нуля</p>
    <h5>Отправка действия вызывает редюсер с текущим состоянием и <br/> действием и сохраняет результат как следующее состояние. Вот как <br/> это выглядит в коде:</h5>
      <div className='code' style={{padding: '15px'}}>
        <code><b>{code}</b></code>
      </div>
      <b><i>{code2}</i> - чуть более точная реализация.</b>
      <p>Это связано с тем, что отправленные действия ставятся в очередь до <br/> следующего рендеринга, аналогично функциям обновления.</p>
    </div>
    </div>
  );
}


// const message = contacts.reduce((acc, contact,) => {
//   acc[contact.id] = `Hello, ${contact.name}`
//   return acc
// }, {})

// const initialState = {
//   selectedId: 0,
//   messages: {message}
// }

// export const contacts = [
//   {id: 0, name: 'Masha', email: 'm.lyasnik@gmail.com'},
//   {id: 1, name: 'Yana', email: 'yanul`ka@gmail.com'},
//   {id: 2, name: 'Misha', email: 'misha@gmail.com'},
// ]

const code = `export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
      //  const nextState = reducer(state, action)
      //  setState(nextState)
      setState((s) => reducer(s, action))
  }
  return [state, dispatch]
}`

const code2 = `setState((s) => reducer(s, action))`