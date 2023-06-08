import { useState } from 'react';
import { foods, filterName, filterDescr } from './Task_2.1data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }
  
  function handleChange1(e) {
    setQuery1(e.target.value);
  }

  return (
    <div style={{width: '600px', margin: '10px'}}>
        <h2>2. Filtering a list </h2>
        <SearchBar 
            value={query}  
            onChange={handleChange} 
            title=' Name'
        />
        <SearchBar 
            value={query1} 
            onChange={handleChange1} 
            title=' Description'
        />
        <hr />
        <h3>По названию:</h3>
        <List items={filterName(foods, query)}/>
        <h3>По описанию:</h3>
        <List items={filterDescr(foods, query1)}/>
    </div>
  );
}

function SearchBar({ value, onChange, title}) {
  return (
    <label >
      Search:{title}
      <input
        style={{margin: '10px'}}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  let [color, setColor] = useState('lightgrey')

  function getColor() {
    if (color === 'lightgrey') {
      setColor(color = 'currentcolor')
    } else {
      setColor(color = 'lightgrey')
    }
  }
  
  return (
    <table>
      <button onClick={getColor} style={{width: '100px'}}>
        {color === 'currentcolor' ? 'show menu' : 'hide menu'}
      </button>
      <tbody>
        {items.map(food => (
          <tr key={food.id} style={{color: 'purple', backgroundColor: color, padding: '10px'}}>
            <td><b>{food.name}</b></td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}





