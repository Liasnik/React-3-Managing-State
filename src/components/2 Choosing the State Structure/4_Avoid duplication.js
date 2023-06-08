import { useState } from 'react';

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  // Находим выбранный элемент по его id
  const selectedItem = items.find(item => item.id === selectedId);

  function handleItemChange(index, e) {
    // Обновляем элемент с указанным индексом
    setItems(items.map(item => {
      if (item.id === index) { // Сравниваем с id, а не с selectedId
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <div style={{maxWidth: '400px'}}>
      <h2><i>4. Avoid duplication in state </i></h2>
      <h2><i>Избегайте дублирования состояния</i></h2>
      <h3>What's your travel snack?</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e); // Передаем item.id вместо item.indexOf
              }}
            />
            <button onClick={() => {
              setSelectedId(item.id); // Устанавливаем выбранный id
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked - {selectedItem && selectedItem.title}.</p>
      {/* Проверяем наличие selectedItem перед отображением */}
      <br/>
      {text1}
      <div className='code'>
        <code>{code1}</code>
      </div>
      {text2}
      <div className='code'>
        <code>{code2}</code>
      </div>
      <div  style={{marginTop: '100px'}}>
        <h2>Резюме по всей теме </h2>
        <h3>(Выбор структуры состояния)</h3>
       {text3}
      </div> 
    </div>
  );
}

const text1 = `Содержимое — selectedItem это тот же объект, что и один из элементов внутри items списка. Из-за этого может вазникать много проблем.`

const text2 = `Хотя вы тоже можете обновить selectedItem после обновления items, проще всего удалить дублирование. В этом примере вместо объекта selectedItem (который создает дублирование с объектами внутри items) вы сохраняете selectedId в состоянии, а затем получаете selectedItem путем поиска вмассиве items  элемента с этим идентификатором:`

const code1 = `export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );`

const code2 = `export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  // Находим выбранный элемент по его id
  const selectedItem = items.find(item => item.id === selectedId); и т.д.
`
const text3 =  <b>
<h3>Группа:</h3>
<p>Если две переменные состояния всегда обновляются вместе, рассмотрите возможность их объединения в одну.</p>
<h3>Противоречия:</h3>
<p>Тщательно выбирайте переменные состояния, чтобы избежать создания «невозможных» состояний.</p>
<p>Структурируйте свое состояние таким образом, чтобы уменьшить вероятность того, что вы совершите ошибку при его обновлении.</p>
<h3>Избыточные и дублирующие:</h3>
<p>Избегайте избыточного и дублирующего состояния, чтобы вам не нужно было синхронизировать его.</p>
<p>Не помещайте свойства в состояние, если вы специально не хотите предотвратить обновления.</p>
<p>Для шаблонов пользовательского интерфейса, таких как выбор, сохраняйте идентификатор или индекс в состоянии, а не сам объект.</p>
<h3>Глубокая вложенность:</h3>
<p>Если обновление глубоко вложенного состояния затруднено, попробуйте сгладить его.</p>
</b> 

// Тоже самое только с помощью индекса:

// export default function Menu() {
//     const [items, setItems] = useState(initialItems);
//     const [selectedIndex, setSelectedIndex] = useState(0);

//       // Можно найти выбранный элемент по его индексу(но это лишнее похоже если есть id)
//     //let selectedItem = items.find((item, index) => selectedIndex === index);
  
//     function handleItemChange(index, e) {
//       setItems(items.map((item, itemIndex) => {
//         if (itemIndex === index) {
//           return {
//             ...item,
//             title: e.target.value,
//           };
//         } else {
//           return item;
//         }
//       }));
//     }
  
//     return (
//       <div>
//         <h2>What's your travel snack?</h2>
//         <ul>
//           {items.map((item, index) => (
//             <li key={item.id}>
//               <input
//                 value={item.title}
//                 onChange={e => {
//                   handleItemChange(index, e);
//                 }}
//               />
//               <button onClick={() => {
//                 setSelectedIndex(index);
//               }}>Choose</button>
//             </li>
//           ))}
//         </ul>
//         <p>You picked - {items[selectedIndex].title}.</p>
//         {/* <p>You picked2 - {selectedItem.title}.</p> */}
//       </div>
//     );
//   }