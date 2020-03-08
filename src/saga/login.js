// 调⽤用异步操作 call、
// 状态更更新 （dispatch） put
// 做监听 take
import {
  call,
  // fork,
  put,
  // take,
  takeEvery
} from "redux-saga/effects";
// import LoginService from "../service/login";
// worker saga
function* loginHandle(action) {

  // 调用异步操作 call
  try {
    const aa = (payload) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(payload.name === 'admin' && payload.password === '123'){
            resolve({isLogin: true, name: 'admin', message: '登录成功'});
          }else{
            resolve({isLogin: false, message: '用户名或密码错误'});
          }
        })
      }).then((data) => {
        return data;
      })
    }
    const res1 = yield call(aa, action.payload);
    yield put({ type: "LOGIN_SUCCESS", payload: { ...res1 } });
  } catch (err) {
    yield put({ type: "LOGIN_FAILURE", payload: err });
  }
}
// watcher saga
function* loginSaga() {
  // while (true) {
  // const action = yield take("loginSaga");
  // call 是⼀个会阻塞的 Effect。即 Generator 在调用结束之前不能执行或处理任何其他事情。
  // yield call(loginHandle, action);
  // console.log("loginSaga-res", action);
  //sy-log
  // fork 是无阻塞型调用,
  // 当我们 fork 一个 任务，任务会在后台启动，调用者也可以继续它自己的流程，而不用等待被 fork 的任务结束。
  // yield fork(loginHandle, action);
  // console.log("loginSaga-res", action);
  //sy-log
  // }
  yield takeEvery("LOGIN_SAGA", loginHandle);
}
export default loginSaga;
