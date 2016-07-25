import React from 'react'
import PreviousUpdates from '../../components/PreviousUpdates'
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

describe('Testing the previous updates component', function() {
  const props = {
        status: [{
          text: "waiting on a status update...",
          time: "0:10"
        }]
  }

  it('should have 5 div tags', function() {
    const wrapper = shallow(<PreviousUpdates {...props} />);
    expect(wrapper.find('div').length).to.equal(6);
  })

  it('should have 1 h4 tag', function() {
    const wrapper = shallow(<PreviousUpdates {...props} />);
    expect(wrapper.find('h4').length).to.equal(1);
  })

  it('should have 1 ul tag', function() {
    const wrapper = shallow(<PreviousUpdates {...props} />);
    expect(wrapper.find('ul').length).to.equal(1);
  })

  it('should have 1 row', function() {
    const wrapper = shallow(<PreviousUpdates {...props} />);
    expect(wrapper.find('.row').length).to.equal(1);
  })
})
    
