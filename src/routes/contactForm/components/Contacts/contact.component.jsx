import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ onDel, info }) => (
  <tr>
    <td>{info.name}</td>
    <td>{info.phone}</td>
    <td>{info.email}</td>
    <td>{info.address}</td>
    <td>
      <button
        onClick={() => {
          onDel(info.id);
        }}
      >
        Del
      </button>
    </td>
  </tr>
);

Contact.propTypes = {
  onDel: PropTypes.func.isRequired,
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;