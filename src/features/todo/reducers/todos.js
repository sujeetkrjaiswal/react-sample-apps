import { ADD_TODO, TOGGLE_TODO } from '../actions/actionConstants';

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: state.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todoReducer({
          id: state.reduce((maxId, u) => (
            maxId > u.id ? maxId : u.id
          ), -1) + 1,
        }, action),
      ];
    case TOGGLE_TODO:
      return state.map(t => todoReducer(t, action));
    default:
      return state;
  }
};

export default todos;
