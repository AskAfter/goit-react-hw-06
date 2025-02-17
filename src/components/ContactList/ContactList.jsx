import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items || []);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
