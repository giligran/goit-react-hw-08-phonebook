import ContactListItem from 'components/ContactLstItem';

function ContactList() {
  const visibleContacts = [];

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}

export default ContactList;
