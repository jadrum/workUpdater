function updater(state='Working', action) {
  switch(action.type) {
    case 'WORKING':
      return 'working';
    case 'ATMEETING':
      return 'at a meeting';
    case 'ONBREAK':
      return 'on my break';
    default:
      return state
  }
}

export default updater;
