import React from 'react'

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-info" >
              <div className="panel-heading"><h4>Most recent update</h4></div>
              <div className="panel-body txtCol">
                <strong>{this.props.status[this.props.status.length - 1].time}</strong> {this.props.status[this.props.status.length - 1].text}
              </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Status
