const stat = (state, action) => {
  switch(action.type) {
    case 'UPDATE_STATUS':
      var date = new Date();
      var hour = date.getUTCHours() - 4;
      var minutes = date.getUTCMinutes();
      console.log(hour + ":" + minutes);

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
      console.log("I went to default for some odd reason")
      return state
  }
}


const status = (state = [], action) => {
  if (typeof state === 'undefined') {
    return "Waiting on a status update..."
  } 

  switch(action.type) {
    case 'UPDATE_STATUS':
      console.log("I reached the form reducer")
      return [
        ...state,
        stat(undefined, action)
      ]
    default:
      return state
  }
}

export default status
