import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ active, onClick, children }) => (
  <button
    className={`btn btn-block ${(active ? 'btn-info' : 'btn-default')}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
