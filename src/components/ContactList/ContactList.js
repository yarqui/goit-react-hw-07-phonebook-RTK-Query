import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectFilterValue } from 'redux/selectors';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { DeleteButton, ContactItem } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const filter = useSelector(selectFilterValue);
  const visibleContacts = selectFilteredContacts(contacts, filter);

  const showLoading = isLoading && !error;
  const showError = error && !isLoading;

  const handleDeleteContact = async id => {
    try {
      deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showLoading && <p>Loading...</p>}
      {showError && <p>{error.message}</p>}

      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton
            id={id}
            type="button"
            disabled={isDeleting}
            onClick={() => {
              handleDeleteContact(id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
      {/* {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: {number}
            <DeleteButton
              id={id}
              type="button"
              disabled={isDeleting}
              onClick={() => {
                handleDeleteContact(id);
              }}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        ))} */}
    </>
  );
};

export default ContactList;
