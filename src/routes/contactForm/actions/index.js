import * as ContactActions from './constants';

export const addContact = (data => ({
  type: ContactActions.ADD_CONTACT,
  data,
}));

export const editContact = ((id, data) => ({
  type: ContactActions.EDIT_CONTACT,
  id,
  data,
}));

export const deleteContact = (id => ({
  type: ContactActions.DEL_CONTACT,
  id,
}));

export const searchContact = (query => ({
  type: ContactActions.SET_SEARCH_FILTER,
  query,
}));

export const orderContact = ((sortField, sortOrder) => ({
  type: ContactActions.SET_ORDER_FILTER,
  sortField,
  sortOrder,
}));
