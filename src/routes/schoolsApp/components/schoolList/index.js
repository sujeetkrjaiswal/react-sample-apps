import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addSchoolsFromAPI } from '../../actions';
import SchoolListComponent from './schoolList.component';

function getSchoolsListBySearchAndFilter(schoolsList, query, availableFilters = []) {
  console.log(availableFilters); // eslint-disable-line
  return schoolsList.filter(u => (
    availableFilters.every(uf => (
      uf.options.indexOf(u[uf.key]) > -1
    )) ||
    (
      query.length > 0 &&
      (
        u.schoolname.indexOf(query) > -1 ||
        u.address.indexOf(query) > -1 ||
        u.pincode.indexOf(query) > -1 ||
        u.area.indexOf(query) > -1
      )
    )
  ));
}


const mapStateToProps = state => ({
  schools: getSchoolsListBySearchAndFilter(
    state.schoolsApp.schools, state.schoolsApp.query.trim(), state.schoolFilters,
  ),
  status: state.schoolsApp.status,
});
const mapDispatchToProps = dispatch => ({
  fetchList: () => (dispatch(addSchoolsFromAPI())),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolListComponent));
