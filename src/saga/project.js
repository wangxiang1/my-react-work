import { put, call, takeEvery } from 'redux-saga/effects';

export function* fetchProject(action) {
  
  const fn = (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(payload.projectName);
      })
    }).then((data) => {
      return data;
    })
  }

  const data = yield call(fn, action.payload)
  yield put({ type: 'GET_PROJECT', payload: {projectName: data} })
}

export default function * projectSaga() {
  yield takeEvery('WATCH_GET_PROJECT', fetchProject);
}