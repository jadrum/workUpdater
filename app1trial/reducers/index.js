import { combineReducers } from 'redux'
import currenttask from './currenttask'
import status from './status'

const updaterApp = combineReducers({
  currenttask,
  status
})

export default updaterApp
