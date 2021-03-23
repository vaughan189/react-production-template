import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
import { loggerMiddleware, thunkMiddleware } from './middlewares';
// import { watchSagas } from './Sagas';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const store = createStore(reducers, enhancer);
// saga.run(watchSagas);

export default store;
