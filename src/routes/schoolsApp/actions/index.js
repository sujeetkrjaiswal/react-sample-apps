import schoolListGetAPI from './schoolsApi';
import { ACTION_FILTER_TOGGLE, ACTION_SCHOOL_SEARCH, ACTION_FETCH_SCHOOL, FETCH_NOSTART, FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from './constants';

export const toggleFilter = (key, name, status) => ({
  type: ACTION_FILTER_TOGGLE,
  key,
  name,
  status,
});

export const searchContact = (query => ({
  type: ACTION_SCHOOL_SEARCH,
  query,
}));

export const fetchingStatus = (status = FETCH_NOSTART, schools = []) => ({
  type: ACTION_FETCH_SCHOOL,
  status,
  schools,
});
export const addSchoolsFromAPI = () => (
  (dispatch) => {
    dispatch(fetchingStatus(FETCH_PENDING));
    schoolListGetAPI().then(
      (schools) => {
        dispatch(fetchingStatus(FETCH_SUCCESS, schools));
      },
      () => {
        dispatch(fetchingStatus(FETCH_FAILED));
      },
    );
  }
);
