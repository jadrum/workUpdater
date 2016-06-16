import React from 'react'
import { task } from '../actions'
import ButtonBody from '../containers/ButtonBody'

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
            <ButtonBody />
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default CurrentTask 
