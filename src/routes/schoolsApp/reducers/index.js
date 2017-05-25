import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
  ACTION_FILTER_TOGGLE,
  ACTION_SCHOOL_SEARCH,
  APP_KEY_FOR_STORE,
  APP_KEY_SCHOOL_LIST,
  APP_KEY_SEARCH_QUERY,
  APP_KEY_FILTER,
  APP_KEY_FETCH_STATUS,
} from '../actions/constants';
import schoolFetch from './schoolFetch';
import schoolFilter from './schoolsFilter';
import schoolQuery from './schoolQuery';

function schoolAppReducer(state = {
  [APP_KEY_SEARCH_QUERY]: '',
  [APP_KEY_FETCH_STATUS]: ACTION_FETCH_STATUS_NOSTART,
  [APP_KEY_SCHOOL_LIST]: [],
  [APP_KEY_FILTER]: [],
}, action) {
  switch (action.type) {
    case ACTION_FETCH_STATUS_NOSTART:
    case ACTION_FETCH_STATUS_PENDING:
    case ACTION_FETCH_STATUS_FAILED:
    case ACTION_FETCH_STATUS_SUCCESS:
      return {
        ...state,
        ...schoolFetch(state[APP_KEY_SCHOOL_LIST], action),
      };
    case ACTION_FILTER_TOGGLE:
      return {
        ...state,
        [APP_KEY_FILTER]: schoolFilter(state[APP_KEY_FILTER], action),
      };
    case ACTION_SCHOOL_SEARCH:
      return {
        ...state,
        [APP_KEY_SEARCH_QUERY]: schoolQuery(state[APP_KEY_SEARCH_QUERY], action),
      };
    default:
      return state;
  }
}


export default {
  [APP_KEY_FOR_STORE]: schoolAppReducer,
};
