import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchContact } from '../../actions';
import SearchContactComponent from '../../../contactForm/components/contactSearch/search.component';
import { APP_KEY_FOR_STORE, APP_KEY_SEARCH_QUERY } from '../../actions/constants';

const mapStateToProps = state => ({
  query: state[APP_KEY_FOR_STORE][APP_KEY_SEARCH_QUERY],
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
