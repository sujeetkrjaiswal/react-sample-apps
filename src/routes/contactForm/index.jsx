import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import ContactSearch from './components/contactSearch';

const ContactApp = () => (
  <section className="container">
    <Header />
    <AddContact />
    <div className="panel panel-primary">
      <div className="panel-heading">
        <ContactSearch />
      </div>
      <div className="panel-body">
        <Contacts />
      </div>
    </div>
  </section>
);

export default ContactApp;
