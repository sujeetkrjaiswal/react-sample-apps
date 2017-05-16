import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-default navbar-static-top navbar-inverse">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">To Do App</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/schools"> Schools </Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
