import schoolListGetAPI from './schoolsApi';
import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
  ACTION_FILTER_TOGGLE,
  ACTION_SCHOOL_SEARCH,
} from './constants';

export const toggleFilter = (filterKey, filterValue, filterStatus) => ({
  type: ACTION_FILTER_TOGGLE,
  filterKey,
  filterValue,
  filterStatus,
});

export const searchContact = (query => ({
  type: ACTION_SCHOOL_SEARCH,
  query,
}));

export const fetchingStatus = (type = ACTION_FETCH_STATUS_NOSTART, schools = []) => ({
  type,
  schools,
});

export const addSchoolsFromAPI = () => (
  (dispatch) => {
    dispatch(fetchingStatus(ACTION_FETCH_STATUS_PENDING));
    schoolListGetAPI().then(
      (schools) => {
        dispatch(fetchingStatus(ACTION_FETCH_STATUS_SUCCESS, schools));
      },
      () => {
        dispatch(fetchingStatus(ACTION_FETCH_STATUS_FAILED));
      },
    );
  }
);
