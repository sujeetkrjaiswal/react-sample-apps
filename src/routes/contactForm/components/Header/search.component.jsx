import React from 'react';
import PropTypes from 'prop-types';

const SearchContactComponent = ({ query, search }) => {
  let input;
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(input.value.trim());
        }}
      >
        <input
          placeholder="Search Query"
          required
          ref={(node) => {
            input = node;
          }}
          value={query}
          onChange={(e) => {
            e.preventDefault();
            search(input.value.trim());
          }}
        />
      </form>
    </section>
  );
};

SearchContactComponent.propTypes = {
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchContactComponent;
