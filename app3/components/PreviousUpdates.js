import React from 'react'

const renderUpdate = (status, i ) => {
  if (i !== 0) {
    return (
    <div key={i}>
      <li className="txtCol">
        <strong>{status.time}</strong> {status.text}
      </li>
      <hr />
    </div>
    )
  } 
}

class PreviousUpdates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 top">
            <div className="panel panel-info">
              <div className="panel-heading txtCol">
                <h4>Previous updates</h4>
              </div>
              <div className="panel-body panel-restriction">
                <ul className="list-unstyled">
                  {this.props.status.map(renderUpdate)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreviousUpdates
