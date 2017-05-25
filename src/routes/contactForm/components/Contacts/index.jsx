import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteContact } from '../../actions';
import {
  APP_KEY_STORE,
  APP_KEY_CONTACTS,
  APP_KEY_QUERY,
  APP_KEY_SORT,
  APP_KEY_SORT_ORDER,
  APP_KEY_SORT_FIELD,
  CONTACT_SORT_ASC,
  CONTACT_SORT_NONE,
} from '../../actions/constants';
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
  order(
    searchFilter(contacts, query),
    sortObject[APP_KEY_SORT_FIELD],
    sortObject[APP_KEY_SORT_ORDER])
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(
    state[APP_KEY_STORE][APP_KEY_CONTACTS],
    state[APP_KEY_STORE][APP_KEY_QUERY],
    state[APP_KEY_STORE][APP_KEY_SORT]),
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
