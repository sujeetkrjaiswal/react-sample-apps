import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
  APP_KEY_FETCH_STATUS,
  APP_KEY_SCHOOL_LIST,
} from '../actions/constants';

export default function SchoolFetchReducer(state = [], action) {
  switch (action.type) {
    case ACTION_FETCH_STATUS_NOSTART:
    case ACTION_FETCH_STATUS_PENDING:
    case ACTION_FETCH_STATUS_FAILED:
    case ACTION_FETCH_STATUS_SUCCESS:
      return {
        [APP_KEY_FETCH_STATUS]: action.type,
        [APP_KEY_SCHOOL_LIST]: [
          ...state,
          ...action[APP_KEY_SCHOOL_LIST],
        ],
      };
    default:
      return {};
  }
}
