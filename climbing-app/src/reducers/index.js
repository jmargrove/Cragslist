const initialState = {
    walls: []
}

const wallReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_ALL_WALLS":
    return {
      ...state,
      walls: action.walls
    }
    break;
    default:
      return state;
  }
}

export default wallReducer;
