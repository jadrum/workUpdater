import { combineReducers } from 'redux'
import currentTask from './currentTask'
import status from './status'
import fetchPractice from './fetchPractice'
import getState from './getState'
import dispatch from './dispatch'

const rootReducer = combineReducers({
  currentTask,
  status,
  fetchPractice,
  getState,
  dispatch
})

export default rootReducer
