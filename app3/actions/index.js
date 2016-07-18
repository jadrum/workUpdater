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
