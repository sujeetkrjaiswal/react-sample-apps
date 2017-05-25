import { ACTION_SET_SEARCH_FILTER } from '../actions/constants';

const contactsSearch = (state = '', action) => {
  switch (action.type) {
    case ACTION_SET_SEARCH_FILTER:
      return action.query;
    default:
      return state;
  }
};
export default contactsSearch;
