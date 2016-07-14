import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TicketUpdates from '../../components/TicketUpdates'

function setup() {
    let props = {
      ticketPanel: expect.createSpy()
    }

    let renderer = TestUtils.createRenderer()
    renderer.render(<TicketUpdates {...props} />)
    let output = renderer.getRenderOutput()

    return {
      props,
      output,
      renderer
    }
}

describe('components', () => {
  describe('Header', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).toBe('div')
    })

    it('should call addTodo if length of text is greater than 0', () => {
      const { output, props } = setup()
    })
  })
})
