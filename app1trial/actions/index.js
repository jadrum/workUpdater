import 'whatwg-fetch';

export const updateStatus = (text) => {
  return {
    type: 'UPDATE_STATUS',
    text
  }
}

export const task = (text) => {
  if (text === 'working') {
    return {
      type: 'WORKING'
    }
  }
  if (text === 'atmeeting') {
    return {
      type: 'ATMEETING'
    }
  }
  if (text === 'onbreak') {
    return {
      type: 'ONBREAK'
    }
  }
}

export const fetcher = () => {
  let url = 'https://api.github.com/users/github';
  return function(dispatch, getState) {
    fetch(url)
      .then(function(response) {
        if (response.status !== 200) {
          console.log('I didnt get a passing status');
          return
        }
        return response.json();
    }).then(function(data) {
      return dispatch({
        type: 'FETCH_IT',
        payload: data
      });
    });
  };
};
