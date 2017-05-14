import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addContact } from '../../actions';

const AddContact = ({ dispatch }) => {
  let name;
  let email;
  let phone;
  let address;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({
      name: name.value,
      email: email.value,
      phone: parseInt(phone.value, 10),
      address: address.value,
    }));
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <input ref={(node) => { name = node; }} type="text" placeholder="Name" required />
        <input ref={(node) => { email = node; }} type="email" placeholder="Email" required />
        <input ref={(node) => { address = node; }} type="text" placeholder="Address" required />
        <input ref={(node) => { phone = node; }} type="number" placeholder="PhoneNo" required />
        <button type="submit"> Add Contact </button>
      </form>
    </section>
  );
};

AddContact.propTypes = {
  dispatch: PropType.func.isRequired,
};

const AddContactContainer = withRouter(connect()(AddContact));
export default AddContactContainer;
