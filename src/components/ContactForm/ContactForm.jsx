import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContact, Input, Button } from './ContacForm.styled';

export default function ContactForm() {
  const nameId = nanoid();
  const numberId = nanoid();
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <FormContact autoComplete="off">
      <label htmlFor={nameId}>Name</label>
      <Input
        id={nameId}
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <Input
        id={numberId}
        type="tel"
        name="number"
        value={contact.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </FormContact>
  );
}
