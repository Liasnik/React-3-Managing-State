import { useState } from 'react';
import { initialLetters } from './Task_3.2Data.js';
import Letter from './Task_4.1Letter.js';

const letters = initialLetters

// export default function MailClient2() {
//   const [selectedIds, setSelectedIds] = useState([]);

//   const selectedCount = selectedIds.length;

//   function handleToggle(toggledId) {
//       // Was it previously selected? (Был ли он выбран ранее?)
//       if (selectedIds.includes(toggledId)) {
//         // Then remove this ID from the array. (Затем удаляем id из массива)
//         setSelectedIds(selectedIds.filter(id => 
//           id !== toggledId
//         ))
//       } else {
//         // Otherwise, add this ID to the array. (В противном случае добавляем этот id)
//         setSelectedIds([
//           ...selectedIds,
//            toggledId
//         ])
//       }
//   }
//   console.log(selectedIds)

//   return (
//     <div style={{maxWidth: '600px', margin: '10px'}}>
//     <h2>Task-4 </h2>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isSelected={
//               // selectedIds.find(selectedId =>
//               // letter.id === selectedId        // не адекватно работает
//               // )
//                 // selectedIds.forEach(selectedId =>
//                 //  letter.id === selectedId     // нормально но "highlighted" не работает почему-то...
//                 // )
//                selectedIds.includes(letter.id)
//             }
//             onToggle={handleToggle}
//           />
//         ))}
//         <hr />
//         <p>
//           <b>
//             You selected {selectedCount} letters
//           </b>
//         </p>
//       </ul>
//     </div>
//   );
// }

// Испрльзуем  Set. Так гораздо быстрее работает!
export default function MailClient2() {
  const [selectedIds, setSelectedIds] = useState(
    new Set()
  );

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              selectedIds.has(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </div>
  );
}