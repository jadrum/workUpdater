import expect from 'expect'
import * as actions from '../../actions'

describe('Testing actions', () => {
  it('should assign values properly for ticketUpdate', () => {
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

  it('should assign values properly for updateStatus', () => {
    expect(actions.updateStatus(
      "I am currently working on..."
        )).toEqual({
          type: "UPDATE_STATUS",
          text: "I am currently working on..."
        })
  })

  it('should assign values properly for task: WORKING', () => {
    expect(actions.task(
      "working"
        )).toEqual({
          type: "WORKING"
        })
  })

  it('should assign values properly for task: ATMEETING', () => {
    expect(actions.task(
      'atmeeting'
        )).toEqual({
          type: "ATMEETING"
        })
  })

  it('should assing values properly for task: ONBREAK', () => {
    expect(actions.task(
      'onbreak'
        )).toEqual({
          type: "ONBREAK"
        })
  })
})
