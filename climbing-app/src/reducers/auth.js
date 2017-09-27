const defaultAuthState = {
  token: null,
  user: null,
}

const auth = (state = defaultAuthState, action) => {
  switch (action.type) {
    case 'SET_AUTHORIZATION':
      return action.data
      break;
      // case 'DELETE_AUTHORIZATION':
      //   return ''
      //   break;
    }
  return state;
}

export default auth;
