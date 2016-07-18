import React from 'react'
import TestUtils from 'react-addons-test-utils'
import TicketUpdates from '../../components/TicketUpdates'
const {
  shallow,
  mount,
  render
} = require( 'enzyme' );
const {
  expect,
  should,
  assert
} = require( 'chai' );

describe('Testing the ticket updates', function() {
  const props = {
    ticketPanel: [
      {
        author: "Justin",
        ticketNum: "TS-123",
        date: "1/1/1111",
        time: "01:11",
        currentStatus: "In Progress",
        details: "Working hard"
      },
      {
        author: "Dylan",
        ticketNum: "TS-142",
        date: "1/2/1111",
        time: "01:12",
        currentStatus: "Closed",
        details: "Hardly working"
      }
    ]
  }

  it('should render correctly', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    expect(wrapper.find('.panelTitle').length).to.equal(1);
  });

  it('should pass bsStyle:default to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('bsStyle'), 'default');
  });

  it('should pass className:overlayButton to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('className'), 'overlayButton');
  });

  it('should pass children:details to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('children'), 'details');
  });

  it('should pass active:false to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('active'), false);
  });

  it('should pass block:false to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('block'), false);
  });

  it('should pass disabled:false to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('disabled'), false);
  });

  it('should pass navitem:false to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('disabled'), false);
  });

  it('should pass navDropdown:false to overlay button', function() {
    const wrapper = shallow(<TicketUpdates {...props} />);
    assert.equal(wrapper.find('.overlayButton').prop('navDropdown'), false);
  });
});
