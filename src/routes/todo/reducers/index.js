import todosvisibility from './visibility';
import todos from './todos';
import {
  APP_KEY_STORE,
  APP_KEY_TODOS,
  APP_KEY_VISIBILITY,
  ACTION_SET_VISIBILITY_FILTER,
  ACTION_TOGGLE_TODO,
  ACTION_ADD_TODO,
  FILTER_SHOW_ALL,
} from '../actions/constants';

function todoAppRootReducer(state = {
  [APP_KEY_TODOS]: [],
  [APP_KEY_VISIBILITY]: FILTER_SHOW_ALL,
}, action) {
  switch (action.type) {
    case ACTION_SET_VISIBILITY_FILTER:
      return {
        ...state,
        [APP_KEY_VISIBILITY]: todosvisibility(state[APP_KEY_VISIBILITY], action),
      };
    case ACTION_ADD_TODO:
    case ACTION_TOGGLE_TODO:
      return {
        ...state,
        [APP_KEY_TODOS]: todos(state[APP_KEY_TODOS], action),
      };
    default:
      return state;
  }
}

export default {
  [APP_KEY_STORE]: todoAppRootReducer,
};
