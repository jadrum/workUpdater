import React from 'react'
import { Button } from 'react-bootstrap';

class ButtonBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel-body">
        <ul className="list-unstyled list-inline text-center">
          <li> 
            <Button className="btn btn-custom" 
            onClick={ () => this.props.task('working') }>Working</Button>
          </li>
          <li>
            <button className="btn btn-custom"
            onClick={ () => this.props.task('atmeeting') }>At a meeting</button> 
          </li>
          <li>
            <button className="btn btn-custom"
            onClick={ () => this.props.task('onbreak') }>On my break</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ButtonBody
