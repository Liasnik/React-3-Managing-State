import { useState } from 'react';
import AddItem from './Task_2.1AddItem.js';
import PackingList from './Task_2.2PackingList.js';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: false },
  { id: 1, title: 'Travel journal', packed: false },
  // { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  //const [total, setTotal] = useState(3);
  //const [packed, setPacked] = useState(1);
  const total = items.length
  
  const packed = items
   .filter(item => item.packed)
   .length
 

  function handleAddItem(title) {
    //setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    //setTotal(total - 1);
    setItems(
      items.filter(item => item.id !== itemId)
    );
  }

  return (
    <div> 
      <h2>Task-2 Избыточное состояние</h2>
    <div style={{height: '300px'}}>  
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </div>
    <p>Хотя можно аккуратно написать каждый обработчик событий, <br/>чтобы корректно обновлять счетчики total и packed, основная <br/>проблема заключалась в том, что эти переменные состояния вообще <br/>существoвали. Они избыточны.</p>
    <div className='code'>
     <code>{code}</code>
    </div>
    <p>Счетчики предметов рассчитываются во время следующего <br/> рендеринга из items, поэтому они всегда актуальны.</p>
  </div>
  );
}

const code = `export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  //const [total, setTotal] = useState(3);
  //const [packed, setPacked] = useState(1);
  const total = items.length
  
  const packed = items
   .filter(item => item.packed)
   .length`

// export default function TravelPack() {
//   const [items, setItems] = useState(initialItems);
//   const [total, setTotal] = useState(3);
//   const [packed, setPacked] = useState(0);

//   function handleAddItem(title) {
//     setTotal(total + 1);
//     setItems([
//       ...items,
//       {
//         id: nextId++,
//         title: title,
//         packed: false
//       }
//     ]);
//   }

//   function handleChangeItem(nextItem) {
//     if (nextItem.packed) {
//       setPacked(packed + 1);
//     } else {
//       setPacked(packed - 1);
//     }
//     setItems(items.map(item => {
//       if (item.id === nextItem.id) {
//         return nextItem;
//       } else {
//         return item;
//       }
//     }));
//   }

//   function handleDeleteItem(itemId) {
//     setTotal(total - 1);
//     setItems(
//       items.filter(item => item.id !== itemId)
//     );
    
//     let i = items.find(item => item.id === itemId);
//      if (i.packed === true) {
//        setPacked(packed - 1)
//       }
 
//   }

//   return (
//     <div>  
//       <AddItem
//         onAddItem={handleAddItem}
//       />
//       <PackingList
//         items={items}
//         onChangeItem={handleChangeItem}
//         onDeleteItem={handleDeleteItem}
//       />
//       <hr />
//       <b>{packed} out of {total} packed!</b>
//     </div>
//   );
// }