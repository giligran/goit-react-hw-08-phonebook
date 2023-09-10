import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

// Контейнер для всей страницы
const Container = styled.div`
  max-width: 1168px;
  padding: 32px 16px;
  margin: 0 auto;
`;

// Контейнер для списка контактов
const ContactsContaier = styled.div`
  margin-top: 32px;
`;

function ContactsEditor() {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        {/* Форма для добавления контактов */}
        <ContactForm />
        <h2>Contacts</h2>
        {/* Фильтр для фильтрации контактов */}
        <Filter />
        <ContactsContaier>
          {/* Список контактов */}
          <ContactList />
        </ContactsContaier>
      </Container>
    </>
  );
}

export default ContactsEditor;
