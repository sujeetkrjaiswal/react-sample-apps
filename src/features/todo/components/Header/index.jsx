import React from 'react';
import FilterLink from './FilterLink.container';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../actions/actionConstants';

const Header = () => (
  <section>
    <h1> Todos </h1>
    <p>
      Show : {' '}
      <FilterLink filter={SHOW_ALL}> ALL </FilterLink> {', '}
      <FilterLink filter={SHOW_ACTIVE}> ACTIVE </FilterLink> {', '}
      <FilterLink filter={SHOW_COMPLETED}> COMPLETED </FilterLink>
    </p>
  </section>
);

export default Header;
