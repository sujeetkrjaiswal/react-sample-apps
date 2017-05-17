import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FETCH_NOSTART, FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILED } from '../../actions/constants';
import FetchPending from '../FetchPending';
import FetchError from '../FetchError';
import Schools from '../Schools';
import Filters from '../Filter';

class SchoolsComponent extends Component {

  componentDidMount() {
    if (this.props.schools.length === 0) {
      this.fetchData();
    }
  }
  fetchData() {
    this.props.fetchList();
  }
  render() {
    switch (this.props.status) {
      case FETCH_NOSTART:
        return null;
      case FETCH_PENDING:
        return <FetchPending />;
      case FETCH_FAILED:
        return <FetchError />;
      case FETCH_SUCCESS:
        return (
          <section>
            <Filters schools={this.props.schools} keys={['category', 'gender', 'medium_of_inst']} />
            <Schools schools={this.props.schools} />
          </section>
        );
      default:
        return null;
    }
  }
}


SchoolsComponent.propTypes = {
  fetchList: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  schools: PropTypes.arrayOf(
    PropTypes.shape({
      schoolid: PropTypes.number.isRequired,
      schoolname: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      medium_of_inst: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      landmark: PropTypes.string.isRequired,
      block: PropTypes.string.isRequired,
      district: PropTypes.string.isRequired,
      cluster: PropTypes.string.isRequired,
      pincode: PropTypes.string.isRequired,
      identification1: PropTypes.string.isRequired,
      identification2: PropTypes.string.isRequired,
      busroutes: PropTypes.string.isRequired,
      latlong: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SchoolsComponent;
