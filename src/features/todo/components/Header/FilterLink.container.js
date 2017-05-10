import { connect } from 'react-redux';
import { FilterLinkComponent } from './FilterLink.component';
import { setVisibilityFilter } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.todosvisibility,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterLinkComponent);

export default FilterLink;
