import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import Root from './routes/Root';
import './scss/global.scss';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./routes/Root', () => {
    const NewRoot = require('./routes/Root').default; // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
