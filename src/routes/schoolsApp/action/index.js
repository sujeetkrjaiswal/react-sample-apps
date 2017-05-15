import schoolListGetAPI from './schoolsApi';
import { ACTION_FETCH_SCHOOL, FETCH_NOSTART, FETCH_FAILED, FETCH_PENDING, FETCH_SUCCESS } from './constants';

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
