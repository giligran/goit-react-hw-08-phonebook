import ContactListItem from 'components/ContactLstItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { selectAllContacts, selectLoading } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import Loader from 'components/Loader/Loader';

function ContactList() {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return isLoading ? (
    <Loader />
  ) : (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}

export default ContactList;
