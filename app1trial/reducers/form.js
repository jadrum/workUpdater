const form = (state, action) => {
  if (typeof state === 'undefined') {
    return "Waiting on a status update..."
  
  switch(action.type) {
    case 'UPDATED':
      return 'undefined'
    default:
      return state
  }
}

export default form
