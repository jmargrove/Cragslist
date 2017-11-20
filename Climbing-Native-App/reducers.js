const defaultState = {
  locations : [
    {
      name: 'location...',
      description: 'description...',
      image: {uri: null},
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
      id: 'jhdbacbebakhcelbrw',
    }
    ,
    {
      name: 'location...',
      description: 'description...',
      image: {uri: null},
      coordinate: {latitude: 41.0, longitude: 2.0 },
      id: 'chjlblajberubaflce',
    }
    ,
    {
      name: 'location...',
      description: 'description...',
      image: {uri: null},
      coordinate: {latitude: 41.5, longitude: 2.2 },
      id: 'djshbachjebrlajdldacl21341',
    }
  ]
}


const reducer = (state = defaultState, action) => {
  console.log("reducer working....", state)
  if (action.type === 'ADD_NEW_LOCATION') {
    return ({...state, locations: [...state.locations, action.newLoc]
    })
  }
  return state
}

export default reducer
