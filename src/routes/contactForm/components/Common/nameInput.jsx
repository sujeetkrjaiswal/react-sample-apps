import React from 'react';
import PropTypes from 'prop-types';

const NameInput = ({ onUpdate, nameState }) => {
  let input;
  let hasError = nameState.hasError;
  function validateName(inputName) {
    const trimedName = inputName.trim();
    if (trimedName.length > 0 && /^[A-Za-z ]+$/.test(trimedName)) {
      return true;
    }
    return false;
  }
  return (
    <input
      ref={(node) => {
        input = node;
      }}
      onChange={(e) => {
        e.preventDefault();
        hasError = validateName(input.value);
        onUpdate(input.value, hasError);
      }}
    />
  );
};

NameInput.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  nameState: PropTypes.shape({
    hasError: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default NameInput;
