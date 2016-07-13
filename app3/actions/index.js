export const ticketUpdate = (payload) => {
  console.log(payload.author)
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
