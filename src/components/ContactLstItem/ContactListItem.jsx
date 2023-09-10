import { Button } from './ContactListItem.styled';

function ContactListItem({ id, name, number }) {
  return (
    <li>
      {`${name}: ${number}`}
      <Button>Delete contact</Button>
    </li>
  );
}

export default ContactListItem;
