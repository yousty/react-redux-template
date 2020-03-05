
import { all, fork } from 'redux-saga/effects';
import { watchAddTodoRequest } from './ducks/todos';

export default function* rootSaga() {
  yield all([fork(watchAddTodoRequest)]);
}
