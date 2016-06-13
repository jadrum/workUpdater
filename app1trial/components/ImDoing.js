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
            <p className="text-center">
              <button id="working" className="btn btn-primary">Working</button>
              <button id="atMeeting" className="btn btn-primary">At a meeting</button> 
              <button id="onBreak" className="btn btn-primary">On my break</button>
            </p>
          </div>
        </div>
      </div>
    </div> 
  </div>
)

export default ImDoing 
