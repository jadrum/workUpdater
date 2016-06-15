import React from 'react'
import { connect } from 'react-redux'
import { updateStatus } from '../actions'

let UpdateStatus = ({ dispatch }) => {
  let textarea

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12">  
          <form className="form-horizontal top gradient" 
            onSubmit={e => {
              e.preventDefault()
              if (!textarea.value.trim()) {
                return
              }
              dispatch(updateStatus(textarea.value))
              input.value = ''
            }}>
            <div className="form-group">
              <label className="col-xs-2 control-label txtCol">Work Status:</label>
              <div className="col-xs-10">
                <textarea className="form-control" rows="5" 
                  ref={node => { textarea = node }}>
                    </textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="Submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
UpdateStatus = connect()(UpdateStatus)

export default UpdateStatus
