import React from 'react';
import PropTypes from 'prop-types';

const SearchContactComponent = ({ query, search, placeholder }) => {
  let input;
  return (
    <section className="p-t-b-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(input.value.trim());
        }}
      >
        <div className="input-group">
          <input
            type="text"
            required
            className="form-control"
            placeholder={placeholder}
            value={query}
            ref={(node) => {
              input = node;
            }}
            onChange={(e) => {
              e.preventDefault();
              search(input.value.trim());
            }}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit"> Search in contacts </button>
          </span>
        </div>
      </form>
    </section>
  );
};

SearchContactComponent.propTypes = {
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchContactComponent;
