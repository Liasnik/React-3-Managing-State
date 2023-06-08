import { Button, li } from "../../4_Preserving and Resetting State/4.5.1ContactList";

export default function ContactList({contacts, selectedId, dispatch}) {
    return (
      <section className="contact-list" >
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} style={li}>
              <button
                onClick={() => {
                 dispatch({ 
                   type: 'changed_selection',
                   contactId: contact.id,
                });
                }}
                style={Button}
               >
                {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }