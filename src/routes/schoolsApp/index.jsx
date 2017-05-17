import React from 'react';
import SchoolList from './components/schoolList';
import SchoolSearch from './components/search';

const SchoolApp = () => (
  <section className="container">
    <h1 className="heading">School App Sample</h1>
    <SchoolSearch placeholder="Seach schools by name, address, area or pincode" />
    <SchoolList />
  </section>
);

export default SchoolApp;
