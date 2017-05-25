import {
  ACTION_ADD_CONTACT,
  ACTION_EDIT_CONTACT,
  ACTION_DEL_CONTACT,
  ACTION_SET_SEARCH_FILTER,
  ACTION_SET_ORDER_FILTER,
  APP_KEY_SORT_ORDER,
  APP_KEY_SORT_FIELD,
} from './constants';

export const addContact = (data => ({
  type: ACTION_ADD_CONTACT,
  data,
}));

export const editContact = ((id, data) => ({
  type: ACTION_EDIT_CONTACT,
  id,
  data,
}));

export const deleteContact = (id => ({
  type: ACTION_DEL_CONTACT,
  id,
}));

export const searchContact = (query => ({
  type: ACTION_SET_SEARCH_FILTER,
  query,
}));

export const orderContact = ((sortField, sortOrder) => ({
  type: ACTION_SET_ORDER_FILTER,
  [APP_KEY_SORT_ORDER]: sortOrder,
  [APP_KEY_SORT_FIELD]: sortField,
}));
