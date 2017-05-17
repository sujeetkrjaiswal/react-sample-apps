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
    <form onSubmit={onSubmit}>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Add Contact</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-3">
              <input ref={(node) => { name = node; }} type="text" placeholder="Name" required className="form-control" />
            </div>
            <div className="col-md-3">
              <input ref={(node) => { email = node; }} type="email" placeholder="Email" required className="form-control" />
            </div>
            <div className="col-md-3">
              <input ref={(node) => { address = node; }} type="text" placeholder="Address" required className="form-control" />
            </div>
            <div className="col-md-3">
              <input ref={(node) => { phone = node; }} type="number" placeholder="PhoneNo" required className="form-control" />
            </div>
          </div>
        </div>
        <div className="panel-footer clearfix">
          <button type="submit" className="btn btn-default pull-right"> Add Contact </button>
        </div>
      </div>
    </form>
  );
};

AddContact.propTypes = {
  dispatch: PropType.func.isRequired,
};

const AddContactContainer = withRouter(connect()(AddContact));
export default AddContactContainer;
