import React from 'react'
import { connect } from 'react-redux'
import { task } from '../actions'

let CurrentTask = ({ dispatch }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 top">
        <div className="panel panel-info">
          <div className="panel-heading txtCol">
            <h4>I am put the current task here </h4>
          </div>
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
        </div>
      </div>
    </div> 
  </div>
)

CurrentTask = connect()(CurrentTask)

export default CurrentTask 
