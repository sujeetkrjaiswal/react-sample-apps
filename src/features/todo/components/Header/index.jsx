import React from 'react';
import FilterLink from './FilterLink.container';

const Header = () => (
  <section>
    <h1> Todos </h1>
    <p>
      Show : {' '}
      <FilterLink filter="SHOW_ALL"> ALL </FilterLink> {', '}
      <FilterLink filter="SHOW_ACIVE"> ACTIVE </FilterLink> {', '}
      <FilterLink filter="SHOW_COMPLETED"> COMPLETED </FilterLink>
    </p>
  </section>
);

export default Header;
