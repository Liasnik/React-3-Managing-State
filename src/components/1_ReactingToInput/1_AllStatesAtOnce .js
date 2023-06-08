
let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

export default function AllStates() {
  return (
    <div style={{ width: '400px', margin: '10px' }}>
      <h2>1. All States At Once </h2>
      <p>Если у компонента много визуальных состояний, может быть удобно показать их все на одной странице:<br/>Такие страницы часто называют «живыми руководствами по стилю» или «книгами историй».</p>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </div>
  );
}

function Form({ status }) {
    if (status === 'success') {
      return <h1 className='Success'>That's right!</h1>
    }
    return (
      <form>
        <textarea disabled={
          status === 'submitting'
        } />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    );
  }