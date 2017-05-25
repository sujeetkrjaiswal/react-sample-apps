import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchContactComponent from './search.component';
import { searchContact } from '../../actions';
import {
  APP_KEY_STORE,
  APP_KEY_QUERY,
} from '../../actions/constants';

const mapStateToProps = state => ({
  query: state[APP_KEY_STORE][APP_KEY_QUERY],
  placeholder: 'Search in contacts by name, address, email or phone',
});

const mapDispatchToProps = dispatch => ({
  search: (query) => {
    dispatch(searchContact(query));
  },
});

const contactSearch = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContactComponent));

export default contactSearch;
