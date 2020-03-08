const initialState = {
  isLogin: false,
  message: '',
  name: '',
};

export default function login(state = initialState, action) {
  let newState = state;
  // console.log("login reducers:", newState, action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      newState.isLogin = action.payload.isLogin;
      newState.name = action.payload.name;
      newState.message = action.payload.message;
      break;
    case "LOGIN_FAILURE":
      newState.isLogin = false;
      newState.message = action.payload.message;
      break;
    default:
      break;
  }
  return { ...newState };
}
