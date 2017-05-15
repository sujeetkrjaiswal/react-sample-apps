import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SchoolComponent from './school.component';

class SchoolsComponent extends Component {

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.props.fetchList();
  }
  render() {
    return (
      <section>
        <p>{this.props.status}</p>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>schoolid</th>
                <th>schoolname</th>
                <th>category</th>
                <th>medium_of_inst</th>
                <th>gender</th>
                <th>address</th>
                <th>area</th>
                <th>landmark</th>
                <th>block</th>
                <th>district</th>
                <th>cluster</th>
                <th>pincode</th>
                <th>identification1</th>
                <th>identification2</th>
                <th>busroutes</th>
                <th>latlong</th>
              </tr>
            </thead>
            <tbody>
              {this.props.schools.map(school => (
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
