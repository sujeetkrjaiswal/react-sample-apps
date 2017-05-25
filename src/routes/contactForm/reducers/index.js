import contacts from './contacts';
import contactsOrder from './contactsOrder';
import contactsSearch from './contactsSearch';
import {
  APP_KEY_STORE,
  APP_KEY_QUERY,
  APP_KEY_SORT,
  APP_KEY_CONTACTS,
  APP_KEY_SORT_ORDER,
  APP_KEY_SORT_FIELD,
  CONTACT_SORT_NONE,
  CONTACT_NAME,
  ACTION_ADD_CONTACT,
  ACTION_DEL_CONTACT,
  ACTION_EDIT_CONTACT,
  ACTION_SET_ORDER_FILTER,
  ACTION_SET_SEARCH_FILTER,
} from '../actions/constants';

function contactRootReducer(state = {
  [APP_KEY_QUERY]: '',
  [APP_KEY_SORT]: {
    [APP_KEY_SORT_ORDER]: CONTACT_SORT_NONE,
    [APP_KEY_SORT_FIELD]: CONTACT_NAME,
  },
  [APP_KEY_CONTACTS]: [],
}, action) {
  switch (action.type) {
    case ACTION_ADD_CONTACT:
    case ACTION_DEL_CONTACT:
    case ACTION_EDIT_CONTACT:
      return {
        ...state,
        [APP_KEY_CONTACTS]: contacts(state[APP_KEY_CONTACTS], action),
      };
    case ACTION_SET_ORDER_FILTER:
      return {
        ...state,
        [APP_KEY_SORT]: contactsOrder(state[APP_KEY_SORT], action),
      };
    case ACTION_SET_SEARCH_FILTER:
      return {
        ...state,
        [APP_KEY_QUERY]: contactsSearch(state[APP_KEY_QUERY], action),
      };
    default:
      return state;
  }
}

export default {
  [APP_KEY_STORE]: contactRootReducer,
};

