import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { SET_ORDER_FILTER, SET_SEARCH_FILTER } from '../../actions/constants';
import { deleteContact } from '../../actions';
import { CONTACT_SORT_ASC, CONTACT_SORT_NONE } from '../../actions/constants';
import ContactsComponent from './contacts.component';

function searchFilter(contacts, query) {
  if (query) {
    return contacts.filter(u => (
      u.name.indexOf(query) > -1 ||
      u.phone.toString().indexOf(query) > -1 ||
      u.email.indexOf(query) > -1 ||
      u.address.indexOf(query) > -1
    ));
  }
  return [...contacts];
}

function order(contacts, sortField, sortOrder) {
  if (contacts.length === 0) {
    return [];
  }
  if (sortOrder === CONTACT_SORT_NONE) {
    return [...contacts];
  }
  const multiplier = sortOrder === CONTACT_SORT_ASC ? 1 : -1;
  const isNumeric = typeof contacts[0][sortField] === 'number';
  if (isNumeric) {
    return [...contacts].sort((a, b) => (
      multiplier * (a[sortField] - b[sortField])
    ));
  }
  return [...contacts].sort((a, b) => (
    multiplier * (a[sortField].localeCompare(b[sortField], 'en', { sensitivity: 'base' }))
  ));
}

const getVisibleContacts = (contacts, query, sortObject) => (
  order(searchFilter(contacts, query), sortObject.sortField, sortObject.sortOrder)
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contacts, state.contactsSearch, state.contactsOrder),
});

const mapDispatchToProps = dispath => ({
  onContactDel: (id) => {
    dispath(deleteContact(id));
  },
});

const Contacts = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsComponent));

export default Contacts;
