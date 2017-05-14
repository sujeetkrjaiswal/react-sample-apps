import React from 'react';
import PropTypes from 'prop-types';
import { CONTACT_SORT_NONE, CONTACT_SORT_ASC, CONTACT_SORT_DESC } from '../../actions/constants';

const AscSym = () => (
  <span> ^ </span>
);
const DescSym = () => (
  <span> \/ </span>
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
    onClick={() => {
      onClick(nextSortOrder);
    }}
  >
    {children}
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
