import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'
const NavIt = () => (
   <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <a className="navbar-brand" href="#"><strong className="txtCol">Work Status
              Updater</strong></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Updater<span className="sr-only">(current)</span></a></li>
            <li><a
              href="file:////Users/justindrum/firstReduxApps/app1/index2.html">Tracker</a></li>
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

const mapStateToProps = (state) => {
  return {
    status: state.status
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavIt); 
