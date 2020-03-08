const initialState = {
  projectName: null
};

export default function counter(state = initialState, action) {
  let newState = state;
  // console.log('reducers:', newState, action)
  switch (action.type) {
    case 'GET_PROJECT':
      newState.projectName = action.payload.projectName;
      break;
    default:
      break;
  }
  return {...newState}
}