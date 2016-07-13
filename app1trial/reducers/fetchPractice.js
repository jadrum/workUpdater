const initialState = {
    avatar_url: "haventfetchedyet@fluff.com",
    bio: "go ahead and press the button already",
    events_url: "sadly you havent given me any events yet",
    repos_url: "the repo url will appear after you fetch :)"
  } 

const fetchPractice = (state, action) => {
  let result;

  if (typeof state === 'undefined') {
    return initialState 
  }
  
  switch(action.type) {
    case 'FETCH_IT':
      result = Object.assign( {}, state, {
        avatar_url: action.payload.avatar_url,
        bio: action.payload.bio,
        events_url: action.payload.events_url,
        repos_url: action.payload.repos_url
      });
      return result;
    default:
      return state
  }
}

export default fetchPractice
