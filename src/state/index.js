import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducers';
// import createSagaMiddleware from 'redux-saga';
// import { watchSagas } from './Sagas';
import thunk from 'redux-thunk';

// const saga = createSagaMiddleware();

// redux dev tool
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

// saga.run(watchSagas);

export default store;
