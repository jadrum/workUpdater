import { combineReducers } from 'redux'
import currentTask from './currentTask'
import status from './status'

const updaterApp = combineReducers({
  currentTask,
  status
})

export default updaterApp
