import React from 'react'
import { connect } from 'react-redux'
import { task } from '../actions'

let CurrentTask = ({ dispatch }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 top">
        <div className="panel panel-info">
          <div className="panel-heading txtCol">
            <strong>I am <span id="iAmDoing">working.</span></strong>
          </div>
          <div className="panel-body">
            <div className="btn-toolbar">
              <button className="btn btn-primary btn-pad" 
                onClick={ () => dispatch(task('working')) }>Working</button>
              <button className="btn btn-primary btn-pad"
                onClick={ () => dispatch(task('atmeeting')) }>At a meeting</button> 
              <button className="btn btn-primary btn-pad"
                onClick={ () => dispatch(task('onbreak')) }>On my break</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
)

CurrentTask = connect()(CurrentTask)

export default CurrentTask 
