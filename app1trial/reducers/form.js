const form = (state, action) => {
  if (typeof state === 'undefined') {
    return "Waiting on a status update..."
  } 

  switch(action.type) {
    case 'UPDATE_STATUS':
      console.log("I reached the form reducer")
      return 'undefined'
    default:
      return state
  }
}

export default form
