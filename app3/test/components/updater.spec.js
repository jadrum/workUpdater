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
import sinon from 'sinon'

function setup() {
  const props = {
    ticketUpdate: sinon.spy() 
  }

  const wrapper = shallow(<TicketUpdater {...props} />);
  const form = wrapper.find('form')
  const button = form.find('button')

  return {
    props,
    wrapper,
    form,
    button
  }
}

describe('Testing the ticket updater component', function() {
  describe('Testing that all inputs and buttons are present', function() {
    it('should have button of type Submit', function() {
      const { wrapper } = setup()
      assert.equal(wrapper.find('.btn').prop('type'), 'Submit');
    });

    it('should have an Author input with correct props', function() {
      const { wrapper } = setup()
      expect(wrapper.contains(
          <input type="Author" className="form-control"
            placeholder="Who worked on the ticket?"
            ref={node => { author = node }}>
              </input>)).to.equal(true);
    });

    it('should have a Ticket Number input with correct props', function() {
      const { wrapper } = setup() 
      expect(wrapper.contains(
          <input type="ticketNum" className="form-control"
            placeholder="Ticket number?"
            ref={node => {ticketNum = node }}>
              </input>)).to.equal(true);
    });

    it('should have a Date input with correct props', function() {
      const { wrapper } = setup()
      expect(wrapper.contains(
          <input type="date" className="form-control"
            ref={node => {date = node }}>
              </input>)).to.equal(true);
    });

    it('should have a Time input with correct props', function() {
      const { wrapper } = setup()
      expect(wrapper.contains(
          <input type="time" className="form-control"
            ref={node => {time = node }}>
              </input>)).to.equal(true);
    });

    it('should have a Current Status select with correct options', function() {
      const { wrapper } = setup()
      expect(wrapper.contains(
          <select className="form-control"
            ref={node => {currentStatus = node }}>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
              <option value="Reopened">Reopened</option>
              <option value="Closed">Closed</option>
                </select>)).to.equal(true);
      });

    it('should have a Details testArea with correct props', function() {
      const { wrapper } = setup() 
      expect(wrapper.contains(
          <textarea className="form-control" placeholder="What have you been working on?
            What do you plan to work on next?"
            rows="5" ref={node => { details = node }}>
              </textarea>)).to.equal(true);
      });
  });

  describe('Testing the form and its props', function() {
    it('should be of type <form>', function() {
      const { form } = setup() 
      expect(form.type()).to.equal('form');
    });

    it('should contain the prop className, onSubmit, and children', function() {
      const { form } = setup();
      expect(form.props()).to.have.all.keys('className', 'onSubmit', 'children');
    });

    it('should have a prop onSubmit that has a function', function() {
      const { form } = setup();
      expect(form.prop('onSubmit')).to.be.a('function');
    });

    it('should call a spy passed in for the onSubmit function', function() {
      const { props, form } = setup()

      // currently failing on purpose because i dont yet know how to use the
      // spy properly with enzyme
      expect(props.ticketUpdate.called).to.equal(true);
    });
  });
});
