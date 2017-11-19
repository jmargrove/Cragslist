export const addToCragList = (loc) => {
  console.log("THE ACTION", loc)
  return ({
    type: 'ADD_NEW_LOCATION',
    newLoc: loc,
  })
}
