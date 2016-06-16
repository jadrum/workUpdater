import React from 'react'
import { connect } from 'react-redux'

const Status = (state) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-info" >
          <div className="panel-heading"><h4>Most recent update</h4></div>
          <div className="panel-body">
            {state.status}    
          </div>  
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    status: state.status,
    currenttask: state.currenttask
  };
}


export default connect(mapStateToProps)(Status)
