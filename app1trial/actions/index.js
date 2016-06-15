export const updateStatus = (text) => {
  console.log('status action');
  return {
    type: 'UPDATE_STATUS',
    text
  }
}

export const task = (text) => {
  if (text === 'working') {
    console.log("working action");
    return {
      type: 'WORKING'
    }
  }
  if (text === 'atmeeting') {
    console.log("meeting action");
    return {
      type: 'ATMEETING'
    }
  }
  if (text === 'onbreak') {
    console.log('break action');
    return {
      type: 'ONBREAK'
    }
  }
}
