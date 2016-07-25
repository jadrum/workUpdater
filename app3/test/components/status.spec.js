import React from 'react'
import Status from '../../components/Status'
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

describe('Testing the status component', function() {
  const props = {
    status: [{
      text: "waiting on a status update...",
      time: "0:10"
    }]
  }

  it('should have 6 div tags', function() {
    const wrapper = shallow(<Status {...props} />);
    expect(wrapper.find('div').length).to.equal(6);
  })
  
  it('should have 1 h4 tag', function() {
    const wrapper = shallow(<Status {...props} />);
    expect(wrapper.find('h4').length).to.equal(1);
  })

  it('should have 1 strong tag', function() {
    const wrapper = shallow(<Status {...props} />);
    expect(wrapper.find('strong').length).to.equal(1);
  })

})
