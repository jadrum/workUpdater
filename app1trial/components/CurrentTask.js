import React from 'react'

const ImDoing = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 top">
        <div className="panel panel-info">
          <div className="panel-heading txtCol">
            <strong>I am <span id="iAmDoing">working.</span></strong>
          </div>
          <div className="panel-body">
            <div className="btn-toolbar">
              <button id="working" className="btn btn-primary btn-pad">Working</button>
              <button id="atMeeting" className="btn btn-primary btn-pad">At a meeting</button> 
              <button id="onBreak" className="btn btn-primary btn-pad">On my break</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
)

export default ImDoing 
