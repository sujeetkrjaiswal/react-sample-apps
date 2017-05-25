import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addSchoolsFromAPI } from '../../actions';
import SchoolListComponent from './schoolList.component';
import {
  APP_KEY_FOR_STORE,
  APP_KEY_SCHOOL_LIST,
  APP_KEY_SEARCH_QUERY,
  APP_KEY_FILTER,
  APP_KEY_FETCH_STATUS,
  APP_FILTER_KEYS,
} from '../../actions/constants';

const satisfyConditions = (school, query, filters, filterKeys) => (
  filterKeys.every(
    key => filters[key].indexOf(school[key]) > -1,
  ) && (
    query.length === 0 ||
    school.searchText.indexOf(query) > -1
  )
);

function getSchoolsAndFilters(schoolList, query, availableFilters) {
  const filtersApplied = availableFilters.reduce((agg, u) => {
    const options = u.options.filter(option => option.status).map(option => option.name);
    if (options.length) {
      return {
        ...agg,
        [u.key]: options,
      };
    }
    return agg;
  }, {});
  const filterKeys = Object.keys(filtersApplied);
  const nonFilterKeys = APP_FILTER_KEYS.filter(key => (!(key in filtersApplied)));
  const schools = [];
  const filtersObj = APP_FILTER_KEYS.reduce((agg, key) => ({
    ...agg,
    [key]: {},
  }), {});
  schoolList.forEach((school) => {
    if (satisfyConditions(school, query, filtersApplied, filterKeys)) {
      schools.push(school);
      nonFilterKeys.forEach((nonSelectedKey) => {
        filtersObj[nonSelectedKey][school[nonSelectedKey]] = false;
      });
    }
    filterKeys.forEach((selectedKey) => {
      filtersObj[selectedKey][school[selectedKey]] = false;
    });
  });
  filterKeys.forEach((key) => {
    filtersApplied[key].forEach((name) => {
      filtersObj[key][name] = true;
    });
  });
  console.log('schools', schools);
  return {
    schools,
    filters: Object.keys(filtersObj).map(key => ({
      key,
      options: Object.keys(filtersObj[key]).map(name => ({
        name,
        status: filtersObj[key][name],
      })),
    })),
  };
}


const mapStateToProps = state => ({
  ...getSchoolsAndFilters(
    state[APP_KEY_FOR_STORE][APP_KEY_SCHOOL_LIST],
    state[APP_KEY_FOR_STORE][APP_KEY_SEARCH_QUERY].trim(),
    state[APP_KEY_FOR_STORE][APP_KEY_FILTER],
  ),
  status: state[APP_KEY_FOR_STORE][APP_KEY_FETCH_STATUS],
});
const mapDispatchToProps = dispatch => ({
  fetchList: () => (dispatch(addSchoolsFromAPI())),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolListComponent));
