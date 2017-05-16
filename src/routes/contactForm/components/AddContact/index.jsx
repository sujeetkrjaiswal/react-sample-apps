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
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Add Contact</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit} className="form-inline">
          <div className="form-group">
            <input ref={(node) => { name = node; }} type="text" placeholder="Name" required className="form-control" />
          </div>
          <div className="form-group">
            <input ref={(node) => { email = node; }} type="email" placeholder="Email" required className="form-control" />
          </div>
          <div className="form-group">
            <input ref={(node) => { address = node; }} type="text" placeholder="Address" required className="form-control" />
          </div>
          <div className="form-group">
            <input ref={(node) => { phone = node; }} type="number" placeholder="PhoneNo" required className="form-control" />
          </div>
          <button type="submit" className="btn btn-default"> Add Contact </button>
        </form>
      </div>
    </div>
  );
};

AddContact.propTypes = {
  dispatch: PropType.func.isRequired,
};

const AddContactContainer = withRouter(connect()(AddContact));
export default AddContactContainer;
