const initialState = {
    walls: [],
    tabNum: ''
}

const wallReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_ALL_WALLS":
    return {
      ...state,
      walls: action.walls
    }
    break;
    case "SWITCH_THE_TAB":
      return {
        ...state,
        tabNum: action.tabNum
      }
    default:
      return state;
  }
}

export default wallReducer;
