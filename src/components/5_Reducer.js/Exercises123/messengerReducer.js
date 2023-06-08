import { contacts } from './data.js';
// import { contacts } from './Messenger.js';

// В наачальное состояние отправляем массив который выглядит
// вот так:

// export const initialState = {
//     selectedId: 0,
//     messages: {
//       0: 'Hello, Masha',
//       1: 'Hello, Yana',
//       2: 'Hello, Misha',
//     }
//   };

// А если мы его получаем извне то вот так его 
// формируем:

export const initialState = {
  selectedId: 0,
  messages: {}
}

// initialState.messages = contacts.reduce((acc, contact) => {
//   acc[contact.id] = `Hello, ${contact.name}`;
//   return acc;
// }, {});

// for (const contact of contacts) {
//   initialState.messages[contact.id] = `Hello, ${contact.name}`;
// }

contacts.forEach((contact) => {
  initialState.messages[contact.id] = `Hello, ${contact.name}`;
});

// Как вариант... но работает не очень:
// const message = contacts.reduce((acc, contact,) => {
//   acc[contact.id] = `Hello, ${contact.name}`
//   return acc
// }, {})
  
  export function messengerReducer(state, action) {
    switch (action.type) {
      case 'changed_selection': {
        return {
          ...state,
          selectedId: action.contactId,
        };
      }
      case 'edited_message': {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: action.message,
          }
        };
      }
      case 'sent_message': {
        return {
          ...state,
          messages: {
            ...state.messages,
            [state.selectedId]: '',
          }
        };
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }