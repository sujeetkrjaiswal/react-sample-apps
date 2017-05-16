import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchoolComponent from './school.component';
import { FETCH_NOSTART, FETCH_PENDING, FETCH_SUCCESS, FETCH_FAILED } from '../../action/constants';

const Loading = () => (
  <div className="alert alert-info" role="alert">
    <span className="glyphicon glyphicon-hourglass" />
    Please Wait ! Fetching Schools List
  </div>
);
const GotError = () => (
  <div className="alert alert-danger" role="alert">
    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
    Unable to fetch schols list
  </div>
);

const SchoolListData = ({ schools }) => (
  <section>
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Medium of inst</th>
            <th>Type</th>
            <th>Address</th>
            <th>Area</th>
            <th>Landmark</th>
            <th>Block</th>
            <th>District</th>
            <th>Cluster</th>
            <th>Pincode</th>
            <th>Identification1</th>
            <th>Identification2</th>
            <th>Bus routes</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {schools.map(school => (
            <SchoolComponent
              key={school.schoolid}
              {...school}
            />
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
SchoolListData.propTypes = {
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

class SchoolsComponent extends Component {

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchList();
  }
  render() {
    switch (this.props.status) {
      case FETCH_NOSTART:
        return null;
      case FETCH_PENDING:
        return <Loading />;
      case FETCH_FAILED:
        return <GotError />;
      case FETCH_SUCCESS:
        return <SchoolListData schools={this.props.schools} />;
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
