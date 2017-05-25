import {
  ACTION_ADD_CONTACT,
  ACTION_EDIT_CONTACT,
  ACTION_DEL_CONTACT,
} from '../actions/constants';

const contactReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_ADD_CONTACT:
      return {
        id: state.id,
        ...action.data,
      };
    case ACTION_EDIT_CONTACT:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_ADD_CONTACT:
      return [
        ...state,
        contactReducer({
          id: state.reduce((maxId, u) => (
            maxId > u.id ? maxId : u.id
            ), -1) + 1,
        }, action),
      ];
    case ACTION_EDIT_CONTACT:
      return state.map((u) => {
        if (action.id === u.id) {
          return u;
        }
        return contactReducer(u, action);
      });
    case ACTION_DEL_CONTACT:
      return state.filter(u => action.id !== u.id);
    default:
      return state;
  }
};
export default contactsReducer;
