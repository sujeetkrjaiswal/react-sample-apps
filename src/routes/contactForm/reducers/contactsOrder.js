import { SET_ORDER_FILTER, CONTACT_SORT_NONE, CONTACT_NAME } from '../actions/constants';

const initialState = {
  sortOrder: CONTACT_SORT_NONE,
  sortField: CONTACT_NAME,
};

const contactOrder = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_FILTER:
      return {
        sortOrder: action.sortOrder,
        sortField: action.sortField,
      };
    default:
      return state;
  }
};

export default contactOrder;
