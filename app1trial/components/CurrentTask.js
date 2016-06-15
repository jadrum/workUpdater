import React from 'react'
import { connect } from 'react-redux'
import { task } from '../actions'
import ButtonBody from '../containers/ButtonBody'

let CurrentTask = (store) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 top">
        <div className="panel panel-info">
          <div className="panel-heading txtCol">
            <h4>I am {store.currenttask}</h4>  
          </div>
        <ButtonBody />
        </div>
      </div>
    </div> 
  </div>
)

CurrentTask = connect()(CurrentTask)

export default CurrentTask 
