import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* fetchProject() {
  console.log('fetchPro saga');
  const time = setTimeout(() => {

  }, 1000)
  yield time;
  yield put({ type: 'GET_PROJECT' })
}

export default function * rootSaga() {
  yield takeEvery('WATCH_GET_PROJECT', fetchProject);
}