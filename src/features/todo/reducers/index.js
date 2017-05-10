import { combineReducers } from 'redux';
import todosvisibility from './visibility';
import todos from './todos';

const todoApp = combineReducers({
  todos,
  todosvisibility,
});

export default todoApp;
