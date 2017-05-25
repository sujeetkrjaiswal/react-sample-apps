import React from 'react';
import FilterLink from './FilterLink.container';
import { FILTER_SHOW_ALL, FILTER_SHOW_ACTIVE, FILTER_SHOW_COMPLETED } from '../../actions/constants';

const Header = () => (
  <section className="p-t-b-10">
    <h1 className="heading"> Todo : A Sample Application</h1>
    <div className="btn-group btn-group-justified">
      <FilterLink filter={FILTER_SHOW_ALL}> ALL </FilterLink>
      <FilterLink filter={FILTER_SHOW_ACTIVE}> ACTIVE </FilterLink>
      <FilterLink filter={FILTER_SHOW_COMPLETED}> COMPLETED </FilterLink>
    </div>
  </section>
);

export default Header;
