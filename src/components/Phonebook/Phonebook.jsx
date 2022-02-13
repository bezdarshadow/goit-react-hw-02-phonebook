import { Component } from 'react';


import ContactFilter from './ContactFilter';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

import styles from './phonebook.module.css'

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  changeFilter = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = (newContact) => {
    const {contacts} = this.state
    if(contacts.find(contact => contact.name === newContact.name)){
        alert(`${newContact.name} is already in contacts`)
        return;
    }
    this.setState(({contacts}) => ({
        contacts: [...contacts, newContact],
      }));
  }
  deleteContact = (contactId) => {
    this.setState( ({contacts}) => ({
        
        contacts: contacts.filter(contact => contact.id !== contactId)
    }))

  }


  render() {
    const { contacts, filter } = this.state;
    const {changeFilter, addContact, deleteContact} = this;

    return (
      <div className={styles.section}>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm onChange={addContact}/>
        <h2 className={styles.title}>Contacts</h2>
        <ContactFilter value={filter} onChange={changeFilter}/>
        <ContactList contacts={contacts} filter={filter} onDelete={deleteContact}/>
      </div>
    );
  }
}

export default Phonebook;
