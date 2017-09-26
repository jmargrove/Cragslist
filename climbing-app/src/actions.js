export const listWalls = (walls) => ({
  type: "LIST_ALL_WALLS",
  walls
})

export const listUsers = (users) => ({
  type: "LIST_ALL_USERS",
  users
})


export const tabSwitch = (tabNum) => ({
  type: "SWITCH_THE_TAB",
  tabNum
})
