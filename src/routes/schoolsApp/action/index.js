import schoolListGetAPI from './schoolsApi';
import { ADD_SCHOOLS, FETCH_SCHOOLS_LIST_FAILED } from './constants';

export const addSchools = schools => ({
  type: ADD_SCHOOLS,
  schools,
});
export const fetchSchoolsFailed = error => ({
  type: FETCH_SCHOOLS_LIST_FAILED,
  error,
});
export const addSchoolsFromAPI = () => (
  dispatch => schoolListGetAPI().then(
    schools => dispatch(addSchools(schools)),
    error => dispatch(fetchSchoolsFailed(error)),
  )
);
