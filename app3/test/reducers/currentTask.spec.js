import expect from 'expect'
import currentTask from '../../reducers/currentTask'

describe('Testing the current task reducers', () => {
  it('should obtain the correct initial state from the reducer', () => {
    expect(
      currentTask(undefined, {})
    ).toEqual(
      "working."
    )
  })

  it('should edit the state properly for WORKING', () => {
    expect(
      currentTask("on my break.", {
        type: "WORKING"
      })).toEqual(
        "working."
      )
  })

  it('should edit the state properly for ATMEETING', () => { 
    expect(
      currentTask("working.", {
        type: "ATMEETING"
      })).toEqual(
        "at a meeting."
      )
  })

  it('should edit the state properly for ONBREAK', () => { 
    expect(
      currentTask("at a meeting.", {
        type: "ONBREAK"
      })).toEqual(
        "on my break."
      )
  })

  it('should return original state when hitting default', () => {
    expect(
      currentTask("on my break.", {
        type: "FAKE_ACTION"
      })).toEqual(
        "on my break."
      )
  })
})
