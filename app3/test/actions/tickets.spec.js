import expect from 'expect'
import * as actions from '../../actions'

describe('Testing the ticket panel actions', () => {
  it('payload should be assigned properly', () => {
    expect(actions.ticketUpdate({
      author: "Justin",
      ticketNum: "TS-135",
      date: "1/1/1111",
      time: "1:11",
      currentStatus: "Closed",
      details: "I have been testing all day"
        })).toEqual({
          type: "TICKET_UPDATE",
          author: "Justin",
          ticketNum: "TS-135",
          date: "1/1/1111",
          time: "1:11",
          currentStatus: "Closed",
          details: "I have been testing all day"
        })
  })
})
