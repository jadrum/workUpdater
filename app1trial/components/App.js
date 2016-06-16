import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'
import PreviousUpdates from './PreviousUpdates'

let App = (state) => (
  <div>
    <Navbar />
    <Status status={state.status}/>
    <UpdateStatus  />
    <CurrentTask currentTask={state.currentTask} />
    <PreviousUpdates status={state.status} />
  </div>
)

function mapStateToProps(state) {
  return {
    status: state.status,
    currentTask: state.currentTask
  }
}

App = connect(mapStateToProps)(App)

export default App
