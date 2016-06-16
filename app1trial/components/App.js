import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'
import PreviousUpdates from './PreviousUpdates'

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
    currentTask: state.currentTask
  }
}

export default connect(mapStateToProps)(App)

