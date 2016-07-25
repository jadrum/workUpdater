import React from 'react'

class ButtonBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel-body">
        <ul className="list-unstyled list-inline text-center">
          <li> 
            <button className="btn btn-primary" 
            onClick={ () => this.props.task('working') }>Working</button>
          </li>
          <li>
            <button className="btn btn-primary"
            onClick={ () => this.props.task('atmeeting') }>At a meeting</button> 
          </li>
          <li>
            <button className="btn btn-primary"
            onClick={ () => this.props.task('onbreak') }>On my break</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default ButtonBody
