import { combineReducers } from 'redux'
import currentTask from './currentTask'
import status from './status'
import fetchPractice from './fetchPractice'

const updaterApp = combineReducers({
  currentTask,
  status,
  fetchPractice
})

export default updaterApp
