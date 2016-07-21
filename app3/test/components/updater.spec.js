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
  const state = {
    author: '',
    ticketNum: '',
    date: '',
    time: '',
    currentStatus: 'In Progress',
    details: ''
  }
  const wrapper = shallow(<TicketUpdater {...props} />);
  const form = wrapper.find('form');

  return {
    props,
    wrapper,
    form,
    state
  }
}

function mountSetup() {
  const props = {
    ticketUpdate: sinon.spy()
  }
  const state = {
    author: '',
    ticketNum: '',
    date: '',
    time: '',
    currentStatus: 'In Progress',
    details: ''
  }
  const wrapper = mount(<TicketUpdater {...props} />);
  const form = wrapper.find('form');

  return {
    props,
    wrapper,
    form,
    state
  }
}

describe('Testing the ticket updater component', function() {
  describe('Testing that all inputs and buttons are present', function() {
    it('should have button of type Submit', function() {
      const { wrapper } = setup()
      assert.equal(wrapper.find('.btn').prop('type'), 'Submit');
    });

    it('should have an Author input with correct props', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const author = wrapper.ref('author').get(0)
      expect(author.type).to.equal("author");
      expect(author.placeholder).to.equal("Who worked on the ticket?");
    });

    it('should have a Ticket Number input with correct props', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const ticketNum = wrapper.ref('ticketNum').get(0)
      expect(ticketNum.type).to.equal("ticketnum");
      expect(ticketNum.placeholder).to.equal("Ticket number?");
    });

    it('should have a Date input with correct props', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const date = wrapper.ref('date').get(0)
      expect(date.type).to.equal("date");
      
    });

    it('should have a Time input with correct props', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const time = wrapper.ref('time').get(0);
      expect(time.type).to.equal("time");
      expect(time.className).to.equal("form-control");
    });

    it('should have a Current Status select with correct options', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const currentStatus = wrapper.ref("currentStatus").get(0);
      expect(currentStatus.className).to.equal("form-control");
      });

    it('should have a Details testArea with correct props', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      const details = wrapper.ref('details').get(0);
      expect(details.rows).to.equal(5);
      });
  });

  describe('Testing default values of all inputs', function() {
    it('should have an Author input with empty default value', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('author').get(0).value).to.equal("");
    });

    it('should have a ticketNum input with empty default value', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('ticketNum').get(0).value).to.equal("");
    });

    it('should have a date input with empty default value', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('date').get(0).value).to.equal("");
    });

    it('should have a time input with empty default value', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('date').get(0).value).to.equal("");
    });

    it('should have a Current Status input with default value "In Progress"', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('currentStatus').get(0).value).to.equal("In Progress");
    });

    it('should have a Details input with empty default value', function() {
      const { wrapper, state } = mountSetup()
      this.state = state;
      expect(wrapper.ref('details').get(0).value).to.equal("");
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

    it('should call a spy passed in for the onSubmit function after populating form values', function() {
      const { props, wrapper, form } = mountSetup()
    
      // Populating values in form so it will let me submit it
      // wrapper.find('input').first().simulate('change', {target: { value: 'Justin' }});
      wrapper.ref('author').get(0).value = 'Justin';
      expect(wrapper.ref('author').get(0).value).to.equal("Justin");
      
      wrapper.ref('ticketNum').get(0).value = 'TS-111';
      expect(wrapper.ref('ticketNum').get(0).value).to.equal("TS-111");
      
      wrapper.ref('date').get(0).value = '1/1/1111';
      expect(wrapper.ref('date').get(0).value).to.equal("1/1/1111");
      
      wrapper.ref('time').get(0).value = '12:34'; 
      expect(wrapper.ref('time').get(0).value).to.equal("12:34");

      wrapper.ref('currentStatus').get(0).value = 'In Progress';
      expect(wrapper.ref('currentStatus').get(0).value).to.equal("In Progress");

      wrapper.ref('details').get(0).value = 'Working hard';
      expect(wrapper.ref('details').get(0).value).to.equal("Working hard");

      const button = form.find('button');

      form.simulate('submit');
      expect(props.ticketUpdate.called).to.equal(true);
    });
  });
});
