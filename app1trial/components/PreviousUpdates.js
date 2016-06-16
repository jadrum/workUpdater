import React from 'react'
import { connect } from 'react-redux'

const renderUpdate = (status, i ) => {
  if (i !== 0) {
    return (
    <div>
      <li>
        <strong>{status.time}</strong> {status.text}
      </li>
      <hr />
    </div>
    )
  } 
}

const PreviousUpdates = (state) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 top">
        <div className="panel panel-info">
          <div className="panel-heading txtCol">
            <h4>Previous updates</h4>
          </div>
          <div className="panel-body">
            <ul className="list-unstyled">
              {state.status.map(renderUpdate)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PreviousUpdates
