import { useState, useEffect } from 'react';
import './App.module.css';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import { ImShocked } from 'react-icons/im';

function App() {
  // const [contacts, setContacts] = useState(initialContacts);
  // const [filter, setFilter] = useState('');

  // const filterContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  // const deleteContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // useEffect(() => {
  //   try {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       setContacts(parsedContacts);
  //     }
  //   } catch (error) {
  //     console.error('Error reading from localStorage', error);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (contacts !== initialContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  return (
    <div className={s.container}>
      <h1 className={s.header}>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      {/* {filterContact.length > 0 ? (
        <ContactList initialContacts={filterContact} onDelete={deleteContact} />
      ) : (
        <h2 className={s.nothingFound}>
          Nothing found <ImShocked className={s.icon} />{' '}
        </h2>
      )} */}
    </div>
  );
}

export default App;
