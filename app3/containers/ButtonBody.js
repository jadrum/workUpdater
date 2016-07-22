import React from 'react'
import { connect } from 'react-redux'
import { task } from '../actions'

let ButtonBody = ({ dispatch }) => (
  <div className="panel-body">
    <ul className="list-unstyled list-inline text-center">
      <li> 
        <button className="btn btn-primary" 
        onClick={ () => dispatch(task('working')) }>Working</button>
      </li>
      <li>
        <button className="btn btn-primary"
        onClick={ () => dispatch(task('atmeeting')) }>At a meeting</button> 
      </li>
      <li>
        <button className="btn btn-primary"
        onClick={ () => dispatch(task('onbreak')) }>On my break</button>
      </li>
    </ul>
  </div>
)

ButtonBody = connect()(ButtonBody)

export default ButtonBody
