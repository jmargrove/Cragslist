const defaultState = {
  locations : [
    {
      name: 'location...',
      description: 'description...',
      imageUri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/QsN6MSmwh952Hpw',
      coordinate: {latitude: 41.390205, longitude: 2.154007 },
      id: 'jhdbacbebakhcelbrw',
    }
    ,
    {
      name: 'location...',
      description: 'description...',
      imageUri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/QsN6MSmwh952Hpw',
      coordinate: {latitude: 41.0, longitude: 2.0 },
      id: 'chjlblajberubaflce',
    }
    ,
    {
      name: 'location...',
      description: 'description...',
      imageUri: 'https://s3-eu-west-1.amazonaws.com/james.margrove/climbing-app/QsN6MSmwh952Hpw',
      coordinate: {latitude: 41.5, longitude: 2.2 },
      id: 'djshbachjebrlajdldacl21341',
    }
  ],
  locationToView: {
    name: 'location...',
    description: 'description...',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrni5-eMKQ_fnp05yYtzgod_QiLZUdRGfplI_Q84ts_WqxDk3',
    coordinate: {latitude: 41.5, longitude: 2.2 },
    id: 'djshbachjebrlajdldacl21341',
  }
}


const reducer = (state = defaultState, action) => {

  console.log("reducer working....", action.obj)
  if (action.type === 'INIT_LOCATIONS') {
    return {...state, locations: [...action.obj]}
  }
  else if (action.type === 'VIEW_LOCATION') {
    return {...state, locationToView: action.obj}
  }
  else if (action.type === 'ADD_NEW_LOCATION') {
    return ({...state, locations: [...state.locations, action.newLoc]
    })
  }
  return state
}

export default reducer
