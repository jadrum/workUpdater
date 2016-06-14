import React from 'react'
import NavIt from './NavIt'
import Status from './Status'
import Form from './Form'
import ImDoing from './ImDoing'
import UpdateStatus from '../containers/UpdateStatus'

const App = () => (
    <div>
      <NavIt />
      <Status />
      <UpdateStatus />
      <ImDoing />
    </div>
)

export default App
