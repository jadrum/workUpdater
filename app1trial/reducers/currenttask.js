const CurrentTask = (state, action) => {
  if(typeof state === 'undefined'){
    return "working"
  } 

  switch(action.type) {
    case 'WORKING':
      console.log('I reached the working updater reducer');
      return "working."
    case 'ATMEETING':
      console.log('I reached the meeting updater reducer');
      return "at a meeting." 
    case 'ONBREAK':
      console.log('I reached the break updater reducer');
      return "on my break."
    default:
      return state
  } 
}

export default CurrentTask 
