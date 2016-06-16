const stat = (state, action) => {
  switch(action.type) {
    case 'UPDATE_STATUS':
      console.log("I reached the creation of the status obj")
      return {
        text: action.text,
        time: "11:11"
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
