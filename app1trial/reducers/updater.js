const updater = (state, action) => {
  console.log("Updating your work status!!!");
  
  if(typeof state === 'undefined'){
    return "working"
  } 

  switch(action.type) {
    case 'WORKING':
      return "working."
    case 'ATMEETING':
      return "at a meeting."
    case 'ONBREAK':
      return "on my break."
    default:
      return state
  } 
}

export default updater 
