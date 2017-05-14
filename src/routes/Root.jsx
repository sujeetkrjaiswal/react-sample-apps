import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configStore from '../store/configureStore';

import NavBar from './common/nav';
import Home from './home';
import About from './about';
import TodoApp from './todo';
import Contact from './contactForm';
import SchoolApp from './schoolsApp';
// const store = configStore();

const Root = () => (
  <Provider store={configStore()}>
    <Router>
      <section>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={TodoApp} />
        <Route path="/contacts" component={Contact} />
        <Route path="/schools" component={SchoolApp} />
      </section>
    </Router>
  </Provider>
);

export default Root;
