const React = require('react');
const {
  expect, 
  should,
  assert
} = require('chai');
const {
  shallow, 
  mount, 
  render
} = require('enzyme');
import { TicketUpdater } from '../../containers/TicketUpdater'

describe('Testing the ticket updater', function() {
  it('should pass', function() {
    const props = {
      ticketUpdate: () => {}
    }
    
    const wrapper = shallow(<TicketUpdater {...props} />);
    assert.equal(wrapper.find('.form-group').prop('className'), 'form-group');
  });
});
