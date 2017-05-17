import { ACTION_SCHOOL_SEARCH, ACTION_FETCH_SCHOOL, FETCH_FAILED, FETCH_SUCCESS, FETCH_PENDING, FETCH_NOSTART } from '../actions/constants';

const schoolFetchReducer = (state = [], action = FETCH_NOSTART) => {
  switch (action) {
    case FETCH_FAILED:
      return state;
    case FETCH_NOSTART:
      return state;
    case FETCH_PENDING:
      return state;
    case FETCH_SUCCESS:
      return [...state];
    default:
      return state;
  }
};

const schoolsReducer = (state = {
  status: FETCH_NOSTART,
  query: '',
  schools: [],
}, action) => {
  switch (action.type) {
    case ACTION_FETCH_SCHOOL:
      return {
        ...state,
        status: action.status,
        schools: [
          ...state.schools,
          ...schoolFetchReducer(action.schools),
        ],
      };
    case ACTION_SCHOOL_SEARCH:
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

export default schoolsReducer;
