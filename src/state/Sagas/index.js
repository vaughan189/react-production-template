// import { FeatureSaga1 } from '../Feature1/FeatureSagas';
import { all } from 'redux-saga/effects';

export function* watchSagas() {
  yield all([]);
  // OR
  // yield all([fork(FeatureSaga1)]);
}
