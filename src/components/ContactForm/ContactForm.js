import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, InputLabel, InputField, AddButton } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = useMemo(() => nanoid(4), []);
  const numberInputId = useMemo(() => nanoid(4), []);

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleAddContact = async ({ name, number }) => {
    try {
      await addContact({ name, number });
    } catch (error) {
      console.log('error:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const doesContactExist = nameQuery => {
    return contacts.some(
      contact => contact.name.toLowerCase() === nameQuery.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doesContactExist(name)) {
      toast.warning(`'${name}' is already in contacts`);
      return;
    }

    handleAddContact({ name, number });

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputLabel htmlFor={nameInputId}>Name</InputLabel>
      <InputField
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={nameInputId}
        placeholder="Contact name"
        required
        autoComplete="off"
        onChange={handleChange}
        value={name}
      />

      <InputLabel htmlFor={numberInputId}>Number</InputLabel>
      <InputField
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        id={numberInputId}
        placeholder="Phone number"
        required
        autoComplete="off"
        onChange={handleChange}
        value={number}
      />
      <AddButton type="submit" disabled={isLoading}>
        {isLoading ? 'Adding contact...' : 'Add contact'}
      </AddButton>
    </Form>
  );
};

export default ContactForm;
