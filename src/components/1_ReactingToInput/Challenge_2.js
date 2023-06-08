import { useState } from "react";

// export default function EditProfile() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')

//     return (
//       <div className='chelenge' style={{ minWidth: '400px', margin: '10px'}}>
//         <form onSubmit={e => {
//           e.preventDefault()
//           setIsEditing(!isEditing)
//         }}
//       >
//       <label>
//       First name:{' '}
//       {isEditing ? (
//           <input type="text" value={firstName} 
//            onChange={e => setFirstName(e.target.value)}
//           />
//       ) : (
//        <b>&nbsp;{firstName}</b>
//       )}
//     </label>
//     <label>
//     Last name:{' '}
//     {isEditing ? (
//       <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
//     ) 
//     : (
//       <b>&nbsp;{lastName}</b>
//     )}
//     </label>
//         <button type="submit">
//           {!isEditing ? 'Edit' : 'Save' } Profile
//         </button>
//         {firstName && lastName &&  <p><i>Hello, {firstName} {lastName} !</i></p>}
//       </form>
//       </div>
//     );
//   }

  export default function EditProfile() {
    //let [status, setStatus] = useState("save");
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("Jane");
    const [lastName, setLastName] = useState("Jacobs");
  
    const fullName = firstName + " " + lastName;
  
    function hendleSubmit(e) {
      e.preventDefault();
      // status === "save" ? (status = "editting") : (status = "save");
      // setStatus(status);
      setIsEditing(!isEditing)
    }
  
    function hendleFirstChenge(e) {
        setFirstName(e.target.value);  
    }
  
    function hendleLastChenge(e) { 
      setLastName(e.target.value);
    }
  
    //if (status === "save") {
    if (!isEditing) {
      return (
       
        <form onSubmit={hendleSubmit}>
          <h2>Challenge_2</h2> 
          <div style={{ minWidth: '400px',  height: '100px', margin: '20px'}}>
          <label>
            First name: <b>&nbsp;{firstName}</b>
          </label>
          <label>
            Last name: <b>&nbsp;{lastName}</b>
          </label>
          </div>
          <button type="submit">
            {/* {status === "editting" ? "Save Profile" : "Edit Protile"} */}
            {isEditing ? "Save Profile" : "Edit Protile"}
          </button>
          <p>
            <i>Hello, {fullName}!</i>
          </p>
        </form>      
      );
    } 
      return (
        <form onSubmit={hendleSubmit}>
          <h2>Challenge_2</h2>
          <div style={{ minWidth: '400px',  height: '100px', margin: '20px'}}>
          <label>
            First name: <input value={firstName}
             onChange={hendleFirstChenge} />
          </label>
          <label>
            Last name: <input value={lastName}
             onChange={hendleLastChenge} />
          </label>
        </div>
          <button type="submit" >
            {isEditing ? "Save Profile" : "Edit Protile"}
          </button>
          <p>
            <i>Hello, {firstName} {lastName} !</i>
          </p>
        </form>
      );
  }
  