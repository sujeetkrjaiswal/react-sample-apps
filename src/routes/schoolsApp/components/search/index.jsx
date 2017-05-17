import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchContact } from '../../actions';
import SearchContactComponent from '../../../contactForm/components/contactSearch/search.component';

const mapStateToProps = state => ({
  query: state.schoolsApp.query,
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
