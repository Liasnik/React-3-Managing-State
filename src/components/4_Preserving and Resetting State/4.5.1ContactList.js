export default function ContactList({
    // selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section style={contactList}>
        <ul>
          {contacts.map(contact =>
            <li key={contact.id} style={li}>
              <button style={Button}
               onClick={() => {
                onSelect(contact);
              }}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }


 

   export const contactList = {
      float: 'left',
      marginBottom: '20px',
    }
  
   export const Button = {
      width: '100px',
      padding: '10px',
      marginRight: '10px',
    }
  
   export const li = {
      listStyle: 'none',
      margin: '0',
      padding: '0'
    }

 

