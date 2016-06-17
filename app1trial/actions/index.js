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

export const fetchPractice = () => {
  return fetchPract()
    .then(function(response) {
      if (response !== 200) {
        console.log(response.status)
      }
      return response.json();
    }).then(function(data) {
      return {
        type: 'FETCH_IT',
        data: data
      };
    })
}
