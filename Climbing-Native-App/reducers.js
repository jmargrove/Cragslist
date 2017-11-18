const defaultState = {
  locations : [
    {
      name: 'location...',
      description: 'description...',
      image: {uri: null},
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
    }
  ]
}


const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD_NEW_LOCATION') {
    return {...state, locations: [...locations, action.newLoc]
  }
  return state
}
