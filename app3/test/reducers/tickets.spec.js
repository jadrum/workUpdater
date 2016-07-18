import expect from 'expect'
import ticketPanel from '../../reducers/ticketPanel'

describe('Testing the ticket panel reducers', () => {
  it('the reducer should obtain correct initial state', () => {
    expect(
      ticketPanel(undefined, {})
    ).toEqual([{
      author: "fake author",
      ticketNumber: "1234",
      timeSpent: "12h",
      currentStatus: "Working"
    }])
  })

  it('the reducer should add ticket updates properly', () => {
    expect(
      ticketPanel([], {
        type: 'TICKET_UPDATE',
        author: "Justin",
        ticketNum: "TS-135",
        date: "1/1/1111",
        time: "1:11",
        currentStatus: "In Progress",
        details: "I have been working all day"
      })
    ).toEqual([
      {
        author: "Justin",
        ticketNum: "TS-135",
        date: "1/1/1111",
        time: "1:11",
        currentStatus: "In Progress",
        details: "I have been working all day"
      }
    ])

    expect(
      ticketPanel([
        {
          author: "Justin",
          ticketNum: "TS-135",
          date: "1/1/1111",
          time: "1:11",
          currentStatus: "In Progress",
          details: "I have been working all day"
        }
      ], {
        type: 'TICKET_UPDATE',
        author: "Dylan",
        ticketNum: "TS-136",
        date: "1/1/1112/",
        time: "1:12",
        currentStatus: "Closed",
        details: "I have been working all day too"
      })
    ).toEqual([
      {
        author: "Justin",
        ticketNum: "TS-135",
        date: "1/1/1111",
        time: "1:11",
        currentStatus: "In Progress",
        details: "I have been working all day"
      }, {
        author: "Dylan",
        ticketNum: "TS-136",
        date: "1/1/1112/",
        time: "1:12",
        currentStatus: "Closed",
        details: "I have been working all day too"
      }
    ])
  })      
})
