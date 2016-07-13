import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App.js'
import updater from './data/update.js'

const defaultState = {
  status: [{
            text: "waiting on a status update...",
            time: ""
          }],
  currentTask: "working.",
  fetchPractice: {
    avatar_url: "haventfetchedyet@fluff.com",
    bio: "go ahead and press the button already",
    events_url: "sadly you havent given me any events yet",
    repos_url: "the repo url will appear after you fetch :)"
  }
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension(): f => f
);

let store = createStore(rootReducer, defaultState, applyMiddleware(thunk), enhancers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

