import React from 'react'

const Form = () => (
  <div className="container-fluid">
    <div className="row">
      <div classNmae="col-xs-12">  
        <form className="form-horizontal top gradient" id="statusForm" action="javascript:statusUpdater()">
          <div className="form-group">
            <label className="col-xs-2 control-label txtCol">Work Status:</label>
            <div className="col-xs-10">
              <textarea className="form-control" id="stat" rows="5"></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="Submit" id="bit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Form
