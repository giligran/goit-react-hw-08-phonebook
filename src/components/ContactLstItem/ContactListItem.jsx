import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operation';
import { Button } from './ContactListItem.styled';

function ContactListItem({ id, name, number }) {
const dispatch = useDispatch();

const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <li>
      {`${name}: ${number}`}
      <Button onClick={handleDelete}>Delete contact</Button>
    </li>
  );
}

export default ContactListItem;
