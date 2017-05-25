import { ACTION_SET_VISIBILITY_FILTER, ACTION_ADD_TODO, ACTION_TOGGLE_TODO } from './constants';

export const setVisibilityFilter = (filter => ({
  type: ACTION_SET_VISIBILITY_FILTER,
  filter,
}));

export const addTodo = (text => ({
  type: ACTION_ADD_TODO,
  text,
}));

export const toggleTodo = (id => ({
  type: ACTION_TOGGLE_TODO,
  id,
}));
