import React from 'react';
import PropTypes from 'prop-types';
import Contact from './contact.component';
import SortOrder from '../SortOrder';
import { CONTACT_NAME, CONTACT_EMAIL, CONTACT_ADDRESS, CONTACT_PHONE } from '../../actions/constants';

const Contacts = ({ contacts, onContactDel }) => (
  <table>
    <thead>
      <tr>
        <th><SortOrder sortField={CONTACT_NAME}>Name</SortOrder></th>
        <th><SortOrder sortField={CONTACT_PHONE}>Phone</SortOrder></th>
        <th><SortOrder sortField={CONTACT_EMAIL}>Email</SortOrder></th>
        <th><SortOrder sortField={CONTACT_ADDRESS}>Address</SortOrder></th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact =>
        <Contact
          key={contact.id}
          info={contact}
          onDel={onContactDel}
        />,
      )}
    </tbody>
  </table>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onContactDel: PropTypes.func.isRequired,
};

export default Contacts;
