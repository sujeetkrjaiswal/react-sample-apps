import React from 'react';
import PropTypes from 'prop-types';

const FilterLinkComponent = ({ active, children, onClick }) => {
  if (active) {
    return (
      <div className="btn-group" role="group">
        <button className="btn btn-primary">{children}</button>
      </div>
    );
  }
  return (
    <div className="btn-group" role="group">
      <button
        className="btn btn-default"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
};

FilterLinkComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterLinkComponent;
