const fetchPractice = (state, action) => {
  if (typeof state === 'undefined') {
    return "blah"
  }
  
  switch(action.type) {
    case 'FETCH_IT':
      result = object_assign( {}, state, {
        avatar_url: action.data.avatar_url,
        bio: action.data.bio,
        events_url: action.data.events_url,
        repos_url: action.data.repos_url
      });
      return result;
    default:
      return state
  }
}

export default fetchPractice
