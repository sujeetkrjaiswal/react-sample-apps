import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { orderContact } from '../../actions';
import { CONTACT_SORT_NONE, CONTACT_SORT_ASC, CONTACT_SORT_DESC } from '../../actions/constants';
import SortOrderComponent from './sortOrder.component';

const mapStateToProps = (state, ownProps) => {
  const currSortOrder = state.contactsOrder.sortField === ownProps.sortField ?
   state.contactsOrder.sortOrder : CONTACT_SORT_NONE;
  let nextSortOrder = CONTACT_SORT_ASC;
  if (currSortOrder === CONTACT_SORT_ASC) {
    nextSortOrder = CONTACT_SORT_DESC;
  }
  return {
    currSortOrder,
    nextSortOrder,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (sortOrder) => {
    dispatch(orderContact(ownProps.sortField, sortOrder));
  },
});

const SortOrder = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortOrderComponent));

export default SortOrder;
