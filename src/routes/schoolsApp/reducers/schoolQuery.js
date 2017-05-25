import {
  ACTION_SCHOOL_SEARCH,
} from '../actions/constants';

export default function (state = '', action = {
  type: ACTION_SCHOOL_SEARCH,
  query: '',
}) {
  switch (action.type) {
    case ACTION_SCHOOL_SEARCH:
      return action.query;
    default:
      return state;
  }
}
