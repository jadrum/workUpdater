const stat = (state, action) => {
  switch(action.type) {
    case 'UPDATE_STATUS':
      var date = new Date();
      var hour = date.getUTCHours() - 4;
      var minutes = date.getUTCMinutes();
      if (minutes < 10) {
        return {
          text: action.text,
          time: hour + ":0" + minutes
        }
      } else {
        return {
          text: action.text,
          time: hour + ":" + minutes 
        }
      }
    default:
      return state
  }
}


const status = (state = [], action) => {
  if (typeof state === 'undefined') {
    return "Waiting on a status update..."
  } 

  switch(action.type) {
    case 'UPDATE_STATUS':
      return [
        ...state,
        stat(undefined, action)
      ]
    default:
      return state
  }
}

export default status
