import React from 'react';
import PropTypes from 'prop-types';
import Filter from './filter.component';

const Filters = ({ filters, onClick }) => (
  <section>
    {filters.map(u => (
      <section
        className="panel panel-default"
        key={`filter-section-${u.key}`}
      >
        <div className="panel-heading">{u.key}</div>
        <div className="panel-body">
          {u.options.map(o => (
            <Filter
              active={o.status}
              key={`${u.key}-${o.name}`}
              onClick={() => {
                onClick(u.key, o.name, !o.status);
              }}
            >
              {o.name}
            </Filter>
          ))}
        </div>
      </section>
    ))}
  </section>
);

Filters.propTypes = {
  onClick: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          status: PropTypes.bool.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default Filters;
