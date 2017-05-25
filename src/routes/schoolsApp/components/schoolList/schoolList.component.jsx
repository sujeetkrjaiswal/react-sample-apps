import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
} from '../../actions/constants';
import FetchPending from '../FetchPending';
import FetchError from '../FetchError';
import Schools from '../Schools';
import Filters from '../Filter';
import SchoolSearch from '../search';

class SchoolsComponent extends Component {

  componentDidMount() {
    console.log('props', this.props);
    if (this.props.schools.length === 0) {
      this.fetchData();
    }
  }
  fetchData() {
    this.props.fetchList();
  }
  render() {
    switch (this.props.status) {
      case ACTION_FETCH_STATUS_NOSTART:
        return null;
      case ACTION_FETCH_STATUS_PENDING:
        return <FetchPending />;
      case ACTION_FETCH_STATUS_FAILED:
        return <FetchError />;
      case ACTION_FETCH_STATUS_SUCCESS:
        return (
          <div className="row">
            <div className="col-md-3">
              <Filters filters={this.props.filters} />
            </div>
            <div className="col-md-9">
              <SchoolSearch placeholder="Seach schools by name, address, area or pincode" />
              <Schools schools={this.props.schools} />
            </div>
          </div>
        );
      default:
        return (
          <h1>Default</h1>
        );
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
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          status: PropTypes.bool.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default SchoolsComponent;
