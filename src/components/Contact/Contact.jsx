import { ImPhone, ImUser } from 'react-icons/im';
import s from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.contact}>
      <p className={s.text}>
        <ImUser className={s.icon} />
        {name}
      </p>
      <p className={s.text}>
        <ImPhone className={s.icon} />
        {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
