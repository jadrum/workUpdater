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

export const fetch = (txt) => {
  if (txt === 'sup') {
    console.log("i reached the action woohoo")
    return {
      type: 'FETCH_IT',
      data: txt
    }
  }
}
