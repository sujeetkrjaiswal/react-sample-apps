import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT_SORT_NONE, CONTACT_SORT_ASC, CONTACT_SORT_DESC } from '../../actions/constants';

const AscSym = () => (
  <span className="glyphicon glyphicon-sort-by-attributes" />
);
const DescSym = () => (
  <span className="glyphicon glyphicon-sort-by-attributes-alt" />
);

const OrderSym = ({ currSortOrder }) => {
  if (currSortOrder === CONTACT_SORT_NONE) {
    return null;
  } else if (currSortOrder === CONTACT_SORT_ASC) {
    return <AscSym />;
  } else if (currSortOrder === CONTACT_SORT_DESC) {
    return <DescSym />;
  }
  return null;
};
OrderSym.propTypes = {
  currSortOrder: PropTypes.string.isRequired,
};

const SortOrderComponent = ({ currSortOrder, nextSortOrder, children, onClick }) => (
  <button
    className={`btn btn-block ${(currSortOrder === CONTACT_SORT_NONE ? 'btn-default' : 'btn-primary')}`}
    onClick={() => {
      onClick(nextSortOrder);
    }}
  >
    {children} &nbsp;&nbsp;&nbsp;&nbsp;
    <OrderSym currSortOrder={currSortOrder} />
  </button>
);

SortOrderComponent.propTypes = {
  currSortOrder: PropTypes.string.isRequired,
  nextSortOrder: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SortOrderComponent;
