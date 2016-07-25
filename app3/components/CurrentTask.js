import React from 'react'
import ButtonBody from './ButtonBody'

class CurrentTask extends React.Component {
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
                <h4>I am {this.props.currentTask}</h4>  
              </div>
            <ButtonBody task={this.props.task} />
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default CurrentTask 
