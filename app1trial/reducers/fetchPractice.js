const fetchPractice = (state, action) => {
  let result;

  if (typeof state === 'undefined') {
    return "blah"
  }
  
  switch(action.type) {
    case 'FETCH_IT':
      result = Object.assign( {}, state, {
        avatar_url: 'hey',
        bio: 'whats up',
        events_url: 'hi',
        repos_url: 'i reached the reducer'
      });
      return result;
    default:
      return state
  }
}

export default fetchPractice
