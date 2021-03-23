import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();
// const saga = createSagaMiddleware();

export { loggerMiddleware, thunkMiddleware };
