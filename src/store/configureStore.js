import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialStateForDemo from './initialState';
import logger from './logger';

export default function configureStore(initialState = initialStateForDemo) {
  const store = createStore(
      combineReducers({
        ...reducers,
      }),
      initialState,
      applyMiddleware(thunk, logger),
    );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers'); // eslint-disable-line
      store.replaceReducer(combineReducers({
        ...nextReducers,
      }));
    });
  }

  return store;
}
