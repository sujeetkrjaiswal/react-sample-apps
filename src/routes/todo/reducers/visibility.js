import { FILTER_SHOW_ALL, ACTION_SET_VISIBILITY_FILTER } from '../actions/constants';

const todosvisibility = (state = FILTER_SHOW_ALL, action) => {
  switch (action.type) {
    case ACTION_SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default todosvisibility;
