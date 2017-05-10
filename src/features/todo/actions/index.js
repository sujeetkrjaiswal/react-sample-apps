import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actionConstants';

export const setVisibilityFilter = (filter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
}));

export const addTodo = (text => ({
  type: ADD_TODO,
  text,
}));

export const toggleTodo = (id => ({
  type: TOGGLE_TODO,
  id,
}));
