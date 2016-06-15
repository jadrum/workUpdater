import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'

let App = () => (
    <div>
      <Navbar />
      <Status />
      <UpdateStatus />
      <CurrentTask />
    </div>
)

function mapStateToProps(state) {
  return {
    form: state.form,
    updater: state.updater
  }
}

App = connect(mapStateToProps)(App)

export default App
