import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

const ContactApp = () => (
  <section>
    <Header />
    <AddContact />
    <Contacts />
  </section>
);

export default ContactApp;
