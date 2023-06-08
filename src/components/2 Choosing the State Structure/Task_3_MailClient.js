import { useState } from 'react';
import { initialLetters } from './Task_3.2Data.js';
import Letter from './Task_3.1Letter.js';

export default function MailClient() {
const [letters, setLetters] = useState(initialLetters);
const [highlightedId, setHighlightedId] = useState(0);

  function handleHover(letter) { 
    setHighlightedId(letter.id) 
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }
  return (
    <div style={{maxWidth: '610px', margin: '10px'}}>
    <h2>Task-3 Дублирование</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
      {text1}
      <div className='code'>
        <code>{code}</code>
      </div>
      {text2}
      <div className='code'>
        <code>{code2}</code>
      </div>
    </div>
  );
}

const text1 = <p className='MarginTop60'>Состояние имеет дублирование! Когда обновляется letters массив после нажатия кнопки, создаётся новый буквенный объект, который  отличается от highlightedLetter.  Поэтому проверка highlightedLetter === letter становится false, а подсветка исчезает:</p>

const text2 = <p> Вместо того, чтобы хранить само письмо в двух местах, сохраните highlightedId вместо него. Затем вы можете проверить isHighlighted каждый letter с помощью letter.id === highlightedId, что будет работать, даже если объект letter изменился с момента последнего рендеринга.</p> 

const code = `export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters)
    const [highlightedLetter, setHighlightedLetter] = useState(null)
  
    function handleHover(letter) {
      setHighlightedLetter(letter)
    }`

const code2 = `export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters)
    const [highlightedId, setHighlightedId] = useState(0)
    
      function handleHover(letter) { 
        setHighlightedId(letter.id) 
      }`

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedLetter, setHighlightedLetter] = useState(null);

//   function handleHover(letter) {
//     setHighlightedLetter(letter);
//   }

//   function handleStar(starred) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starred.id) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <div style={{width: '350px'}}>
//       <h2>Task-3 Дублирование</h2>
//       <h3>Inbox</h3>
//       <ul>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter === highlightedLetter
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// }