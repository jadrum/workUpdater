import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'

let App = (state) => (
   <div>
      <Navbar />
      <Status form={state.form}/>
      <UpdateStatus  />
      <CurrentTask updater={state.updater} />
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
