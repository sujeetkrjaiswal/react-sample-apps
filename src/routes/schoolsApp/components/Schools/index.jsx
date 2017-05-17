import React from 'react';
import PropTypes from 'prop-types';
import SchoolComponent from './school.component';

const Schools = ({ schools }) => (
  <section>
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Medium of inst</th>
            <th>Type</th>
            <th>Address</th>
            <th>Area</th>
            <th>Block</th>
            <th>Pincode</th>
            <th>Bus routes</th>
          </tr>
        </thead>
        <tbody>
          {schools.map(school => (
            <SchoolComponent
              key={school.schoolid}
              {...school}
            />
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
Schools.propTypes = {
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      // schoolid: PropTypes.number.isRequired,
      schoolname: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      medium_of_inst: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      // landmark: PropTypes.string.isRequired,
      block: PropTypes.string.isRequired,
      // district: PropTypes.string.isRequired,
      // cluster: PropTypes.string.isRequired,
      pincode: PropTypes.string.isRequired,
      // identification1: PropTypes.string.isRequired,
      // identification2: PropTypes.string.isRequired,
      busroutes: PropTypes.string.isRequired,
      // latlong: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Schools;
