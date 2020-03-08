import { all } from 'redux-saga/effects';
import projectSage from './project';
import loginSaga from './login';

export default function * rootSaga() {
  console.log('rootSaga:');
  yield all([loginSaga(), projectSage()]);
}