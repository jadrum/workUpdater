import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App.js'
import updater from './data/update.js'

const middleware = applyMiddleware(thunk);

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension(): f => f
);

const persistedState = localStorage.getItem('ReduxState') ? JSON.parse(localStorage.getItem('ReduxState')) : {}

let store = createStore(rootReducer, persistedState, compose(applyMiddleware(thunk), enhancers));

store.subscribe(() => {
  localStorage.setItem('ReduxState', JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

