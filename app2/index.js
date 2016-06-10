import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Updater from './components/Updater'
import updater from './reducers'

const store = createStore(updater)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
      <Updater
        value={store.getState()}
        onWorking={() => store.dispatch({ type: 'WORKING' })}
        onMeeting={() => store.dispatch({ type: 'ATMEETING' })}
      />,
      rootEl
  )
}

render()
store.subscribe(render)
