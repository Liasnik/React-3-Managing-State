import { useState } from 'react';

export default function LetsCheckForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  //  const [fullName, setFullName] = useState('') это состояние лишнее...
  
  let fullName = firstName + ' ' + lastName 

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    // setFullName(e.target.value + ' ' + lastName); и это соответственно,
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    //setFullName(firstName + ' ' + e.target.value); и это само собой.
  }

  return (
    <div style={{maxWidth: '400px', margin: '10px'}}> 
        <h2><i>3. Avoid redundant state</i></h2>
        <h2><i>Избегайте избыточного состояния</i></h2>
      <h3>Let’s check you in</h3>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br/>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      <hr/>
      <p>Здесь <b><i>fullName</i></b> не является переменной состояния.  <br/>Вместо этого он вычисляется во время рендеринга:</p>
        <div className='code'>
         <code>{code3}</code>
        </div>
        <p><b>Don’t mirror props in state:</b></p>
        <p><b>(Не отображайте свойства в состоянии)</b></p>
        <div style={{backgroundColor: 'whitesmoke', padding: '5px', borderRadius: '9px'}}>
         <code style={{ whiteSpace: "break-spaces" }}>{code}</code>
        </div>
        <p>Вместо этого нужно использовать свойство <i>messageColor</i> <br/>прямо в коде:</p>
        <div className='code'>
         <code>{code2}</code>
        </div>
        <p>Eсли мы не хотим конечно намеренно игнорировать <br/>все обновления для определенного свойства. <br/></p>По соглашению начинайте имя пропса с initial или default,<br/>чтобы уточнить, что его новые значения игнорируются.
    </div>
  );
}


const code = `function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor)`
const code2 = `function Message({ messageColor }) {
  const color = messageColor;`
const code3 = `export default function Form() {
    const [firstName, setFirstName] =
  useState('')
    const [lastName, setLastName] =
  useState('')
    //const [fullName, setFullName] =
  useState('') это состояние лишнее...
  
const fullName = firstName + ' ' + lastName;`
