export const addToCragList = (coords) => {
  return ({
    type: 'ADD_COORDS',
    newCoords: coords,
  })
}
