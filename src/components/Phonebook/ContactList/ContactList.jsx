import PropTypes from "prop-types";

import styles from './contact-list.module.css'

const ContactList = ({ contacts, filter, onDelete }) => {
  const normalizeFilter = filter.toLowerCase();
  const contactsList = contacts
    .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    .map(contact => (
      <li className={styles.item} key={contact.id}>
        <p className={styles.text}>{contact.name}</p>
        <p className={styles.text}>{contact.number}</p>
        <button className={styles.button} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    ));
  return <ul className={styles.list}>{contactsList}</ul>;
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }
    )).isRequired,
    filter: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}
