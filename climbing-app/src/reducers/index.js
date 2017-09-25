const initialState = {
    walls: [],
    tabNum: ''
}

const wallReducer = (state = initialState, action) => {
  switch(action.type) {
    case "LIST_ALL_WALLS":
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
    break;

    default:
      return state;
  }
}

export default wallReducer;
