import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CurrentTask from '../../components/CurrentTask'
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

describe('Testing the ticket updates component', function() {
  const props = "working."

  it('should have 5 div tags', function() {
    const wrapper = shallow(<CurrentTask {...props} />);
    expect(wrapper.find('div')).to.have.length(5);
  })

  it('should have 1 h4 tag', function() {
    const wrapper = shallow(<CurrentTask {...props} />);
    expect(wrapper.find('h4')).to.have.length(1);
  })

  it('should have 1 row', function() {
    const wrapper = shallow(<CurrentTask {...props} />);
    expect(wrapper.find('.row')).to.have.length(1);
  })
})

               
