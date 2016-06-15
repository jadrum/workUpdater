import React from 'react'
import Navbar from './Navbar'
import Status from './Status'
import CurrentTask from './CurrentTask'
import UpdateStatus from '../containers/UpdateStatus'

const App = () => (
    <div>
      <Navbar />
      <Status />
      <UpdateStatus />
      <CurrentTask />
    </div>
)

export default App
