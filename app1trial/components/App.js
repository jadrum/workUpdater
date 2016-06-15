import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'

let App = (state) => (
   <div>
      <Navbar />
      <Status status={state.status}/>
      <UpdateStatus  />
      <CurrentTask currenttask={state.currenttask} />
 </div>
)

function mapStateToProps(state) {
  return {
    status: state.status,
    currenttask: state.currenttask
  }
}

App = connect(mapStateToProps)(App)

export default App
