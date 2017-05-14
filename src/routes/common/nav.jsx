import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    Something in Navingation Bar
    <Link to="/">Home</Link> {' | '}
    <Link to="/about">About</Link> {' |  '}
    <Link to="/todo">To Do App</Link> {' | ' }
    <Link to="/contacts">Contacts</Link> {' | ' }
    <Link to="/schools"> Schools </Link>
  </nav>
);

export default NavBar;
