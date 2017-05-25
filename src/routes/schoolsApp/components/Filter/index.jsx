import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions';
import Filters from './filters.component';


const mapDispatchToProps = dispatch => ({
  onClick: (key, value, status) => dispatch(toggleFilter(key, value, status)),
});

export default withRouter(connect(
  undefined,
  mapDispatchToProps,
)(Filters));
