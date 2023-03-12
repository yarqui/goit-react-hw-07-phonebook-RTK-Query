import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './Filter';
import Layout from './Layout';
import { List } from './ContactList/ContactList.styled';

const App = () => {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <List>
          <ContactList />
        </List>
      </Section>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose="1500"
      ></ToastContainer>
    </Layout>
  );
};

export default App;
