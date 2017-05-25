import {
  APP_KEY_SORT_ORDER,
  APP_KEY_SORT_FIELD,
  ACTION_SET_ORDER_FILTER,
  CONTACT_SORT_NONE,
  CONTACT_NAME,
} from '../actions/constants';

const initialState = {
  [APP_KEY_SORT_ORDER]: CONTACT_SORT_NONE,
  [APP_KEY_SORT_FIELD]: CONTACT_NAME,
};

const contactOrder = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_ORDER_FILTER:
      return {
        [APP_KEY_SORT_ORDER]: action[APP_KEY_SORT_ORDER],
        [APP_KEY_SORT_FIELD]: action[APP_KEY_SORT_FIELD],
      };
    default:
      return state;
  }
};

export default contactOrder;
