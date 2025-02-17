import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items || []);
  console.log(contacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
