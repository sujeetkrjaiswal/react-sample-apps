import { ADD_SCHOOLS } from '../action/constants';

const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SCHOOLS:
      return [
        ...state,
        ...action.schools,
      ];
    default:
      return state;
  }
};

export default schoolsReducer;
