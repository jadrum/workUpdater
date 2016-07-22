import expect from 'expect'
import status from '../../reducers/status'

describe('Testing the status reducer', () => {
  it('should obtain the correct initial state from the reducer', () => {
    expect(
      status(undefined, {})
    ).toEqual([{
      text: "waiting on a status update...",
      time: "0:00"
    }])
  })

  it('should add new status to original state', () => {
    const date = new Date();
    const hour = date.getUTCHours() - 4;
    const minutes = date.getUTCMinutes();
    if (minutes < 10) {
      expect(
        status([{
          text: "waiting on a status update...",
          time: "0:00"
        }], {
          type: 'UPDATE_STATUS',
          text: "I am testing"
        })
      ).toEqual([
        {
          text: "waiting on a status update...",
          time: "0:00"
        }, {
          text: "I am testing",
          time: hour + ":0" + minutes
        }
      ])
    } else {
      expect(
        status([{
          text: "waiting on a status update...",
          time: "0:00"
        }], {
          type: 'UPDATE_STATUS',
          text: "I am testing"
        })
      ).toEqual([
        {
          text: "waiting on a status update...",
          time: "0:00"
        }, {
          text: "I am testing",
          time: hour + ":" + minutes
        }
      ])
    }
  })
})
