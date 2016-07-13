import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'
import PreviousUpdates from './PreviousUpdates'
import Fetch from 'react-fetch'
import FetchPractice from './FetchPractice'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Status status={this.props.status}/>
        <UpdateStatus  />
        <CurrentTask currentTask={this.props.currentTask} />
        <PreviousUpdates status={this.props.status} />
        <Fetch url="https://api.github.com/users/github">
          <TestComponent/>
        </Fetch>
        <FetchPractice fetchPractice={this.props.fetchPractice}/>
      </div>
    )
  }
}

App.propTypes = {
  currentTask: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    status: state.status,
    currentTask: state.currentTask,
    fetchPractice: state.fetchPractice
  }
}

class TestComponent extends React.Component{
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading"><h4>Fetch ajax play</h4></div>
              <div className="panel-body">
                <ul className="list-unstyled">
                  <li>Name: {this.props.name}</li>
                  <li>Public Repos: {this.props.public_repos}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default connect(mapStateToProps)(App)

