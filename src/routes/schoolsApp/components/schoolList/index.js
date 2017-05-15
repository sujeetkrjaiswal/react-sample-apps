import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addSchoolsFromAPI } from '../../action';
import SchoolsComponent from './schools.component';

const mapStateToProps = state => ({
  schools: state.schoolsApp.schools,
  status: state.schoolsApp.status,
});
const mapDispatchToProps = dispatch => ({
  fetchList: () => (dispatch(addSchoolsFromAPI())),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolsComponent));
