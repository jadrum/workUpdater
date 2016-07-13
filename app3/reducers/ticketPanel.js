const initialState = [{
                 author: "fake author",
                 ticketNumber: "1234",
                 timeSpent: "12h",
                 currentStatus: "Working"
                }]

const panel = (state, action) => {
  switch(action.type) {
    case 'TICKET_UPDATE':
      return {
        author: action.author,
        ticketNum: action.ticketNum,
        date: action.date,
        time: action.time,
        currentStatus: action.currentStatus,
        details: action.details
      }
    default:
      return state
  }
}


const ticketPanel = (state, action) => {
  if(typeof state === 'undefined') {
    return initialState
  }
  
  switch(action.type) {
    case 'TICKET_UPDATE':
      return [
        ...state,
        panel(undefined, action)
      ]
    default:
      return state
  }
}

export default ticketPanel
