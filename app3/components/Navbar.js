import React from 'react'

class NavIt extends React.Component {
  constructor(props) {
    super(props);
  }
  
  showTicketHandler(e) {
    e.preventDefault();
    if(typeof this.props.onTicketChange === 'function') {
      this.props.onTicketChange(e);
    }
  }

  showStatusHandler(e) {
    e.preventDefault();
    if(typeof this.props.onStatusChange === 'function') {
      this.props.onStatusChange(e);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <a className="navbar-brand" href="#"><strong className="navbarTxt">Work Status
                Updater</strong></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li >
                <a onClick={this.showTicketHandler.bind(this)} href="#">
                  Updater
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a onClick={this.showStatusHandler.bind(this)} href="#2">
                  Tracker
                </a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                  role="button" aria-haspopup="true"
                  aria-expanded="false">Coming soon... <span className="caret">&nbsp; </span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavIt 
