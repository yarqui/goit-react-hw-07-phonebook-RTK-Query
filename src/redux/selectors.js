export const selectFilterValue = state => state.filter;

export const selectFilteredContacts = (contacts, filterValue) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
