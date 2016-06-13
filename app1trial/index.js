import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import updaterApp from './reducers'
import App from './components/App.js'



let store = createStore(updaterApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
