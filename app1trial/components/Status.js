import React from 'react'

const Status = (state) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12">
        <div className="panel panel-info" >
          <div className="panel-heading"><h4>Most recent update</h4></div>
          <div className="panel-body">
            {state.form}    
          </div>  
        </div>
      </div>
    </div>
  </div>
)

export default Status
