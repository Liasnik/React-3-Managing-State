import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <div style={{width: '470px'}}>
      <h2>1. Передача <span style={{color: 'green'}}>user</span> сразу в 5й компонент минуя остальные</h2>
      <div className='code'>
        <code>{code}</code>
      </div>
      <UserContext.Provider value={user}>
      <h3>Component 1</h3>
      <h1>Hello <span style={{color: 'green'}}>{user}</span> !</h1><hr/>
      <Component2 />
      </UserContext.Provider>
      <div className='code'>
        <code>{code2}</code>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3><hr/>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3><hr/>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3><hr/>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 5</h3>
      <h2>
        Hello {' '}
        <span style={{color: 'green'}}>
            {user}
        </span> {' '}
        again!
       </h2>
    </>
  );
}

const code =  `import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (  
    <UserContext.Provider value={user}>
        <h3>Component 1</h3>
      <h1>Hello {user}!</h1>
      <Component2 />
    </UserContext.Provider>
  );
}`

const code2 = `function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello {user} again!</h2>
    </>
  );
}`