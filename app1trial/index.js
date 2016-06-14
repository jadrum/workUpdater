import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import updaterApp from './reducers'
import App from './components/App.js'
import form from './data/status'
import updater from './data/update'

const defaultState = {
        form,
        updater
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension(): f => f
);

let store = createStore(updaterApp, defaultState, enhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
