export const addToCragList = (loc) => {
  return ({
    type: 'ADD_NEW_LOCATION',
    newLoc: loc,
  })
}
