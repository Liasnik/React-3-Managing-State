import { useState } from "react"

export default function Form() {
    const [answer, setAnswer] = useState('')  
    const [error, setError] = useState(null)
    const [status, setStatus] = useState('typing') 

    if (status === 'success') {
        return <h1>That's right</h1>
    }
    return (
        <div style={{ width: '400px', margin: '10px' }}>
            <h2>2. City quiz</h2>
            <p> In which city is there a billboard that turns air into drinkable water?</p>
            <form>
                <input disabled={
                    status === 'submitting'
                } />
                <br/>
                <button
                    disabled={
                        status === 'empty' ||
                        status === 'submitting'
                    }
                >
                    Submit
                </button>
                <p className='Error'>Good guess but a wrong answer. Try again!</p>
            </form>
                <p style={{marginTop: '100px'}}>Нам нужно пять разных состояний формы:</p>
            <div className='code'>
            <csode >
                {code}
            </csode>
            </div>
                <p>Сконпоновали их в три переменных  состояния для избежания потенциальных парадоксов:</p>
            <div className='code'>
            <csode >
                {code2}
            </csode>
            </div>
        </div>
    )
}

const code2 =  `const [answer, setAnswer] = useState('')  
const [error, setError] = useState(null)
const [status, setStatus] = useState('typing') // or success or submittin `

const code = `let statuses = [
    'empty', 'typing', 'submitting', 'success', 'error'
]`


//Шаг 4. Удалите все ненужные переменные состояния(несколько состояний можно 
// объединить в одно, особенно те которые могут вызвать парадокс)
// const [answer, setAnswer] = useState('')
// //const [isEmpty, setIsEmpty] = useState(true) 

// const [error, setError] = useState(null)
// //const [isError, setIsError] = useState(false) 

// //const [isTyping, setIsTuping] = useState(false) 
// //const [isSubmitting, setIsSubmitting] = useState(false) 
// //const [isSuccess, setIsSuccess] = useState(false) 
// const [status, setStatus] = useState('typing') // 'typing', 'submitting', or 'success'


// export default function Form({status = 'empty'}) {
//     if (status === 'success') {
//         return <h1>That's right</h1>
//     }

//     return (
//         <>
//         <h2>City quiz</h2>
//         <p>
//             In which city is there a billboard that turns air into drinkable water?
//         </p>
//         <form>
//             <textarea />
//             <br/>
//             <button>
//                 Submit
//             </button>
//         </form>
//         </>
//     )
// }