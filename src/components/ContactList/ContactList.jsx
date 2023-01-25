import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations/contactsThunk';
import { getFilteredContacts, selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const users = useSelector(selectContacts);
  return (
    <>
      <h3 className={styles.contactInfo}>
        Your phonebook has {users.length} contacts
      </h3>
      <hr />
      <ul>
        {contacts.map(item => (
          <li key={item.id} className={styles.contactUser}>
            <p className={styles.user}>
              <b>{item.name}</b>
            </p>
            <span>{item.number}</span>
            <button
              type="button"
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
