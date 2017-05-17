import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable camelcase */
const SchoolComponent = ({
  // schoolid,
  schoolname,
  category,
  medium_of_inst,
  gender,
  address,
  area,
  // landmark,
  block,
  // district,
  // cluster,
  pincode,
  // identification1,
  // identification2,
  busroutes,
  // latlong,
}) => (
  <tr>
    <td>{schoolname}</td>
    <td>{category}</td>
    <td>{medium_of_inst}</td>
    <td>{gender}</td>
    <td>{address}</td>
    <td>{area}</td>
    <td>{block}</td>
    <td>{pincode}</td>
    <td>{busroutes}</td>
  </tr>
);

SchoolComponent.propTypes = {
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
};

export default SchoolComponent;
