import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchContact } from '../../actions';
import SearchContactComponent from './search.component';

const mapStateToProps = state => ({
  query: state.contactsSearch,
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
