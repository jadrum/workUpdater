export const ticketUpdate = (payload) => {
  return {
    type: 'TICKET_UPDATE',
    author: payload.author,
    ticketNum: payload.ticketNum,
    date: payload.date,
    time: payload.time,
    currentStatus: payload.currentStatus,
    details: payload.details
  }
}

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
