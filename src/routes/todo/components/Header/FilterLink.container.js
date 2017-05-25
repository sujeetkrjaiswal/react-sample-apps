import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterLinkComponent from './FilterLink.component';
import { setVisibilityFilter } from '../../actions';
import { APP_KEY_STORE, APP_KEY_VISIBILITY } from '../../actions/constants';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state[APP_KEY_STORE][APP_KEY_VISIBILITY],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLinkComponent));

export default FilterLink;
