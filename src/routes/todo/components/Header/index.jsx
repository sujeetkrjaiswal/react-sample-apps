import React from 'react';
import FilterLink from './FilterLink.container';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../actions/constants';

const Header = () => (
  <section className="p-t-b-10">
    <h1 className="heading"> Todo : A Sample Application</h1>
    <div className="btn-group btn-group-justified">
      <FilterLink filter={SHOW_ALL}> ALL </FilterLink>
      <FilterLink filter={SHOW_ACTIVE}> ACTIVE </FilterLink>
      <FilterLink filter={SHOW_COMPLETED}> COMPLETED </FilterLink>
    </div>
  </section>
);

export default Header;
