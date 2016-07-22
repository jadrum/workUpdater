import { combineReducers } from 'redux'
import ticketPanel from './ticketPanel'
import currentTask from './currentTask'
import status from './status'

const index = combineReducers({
  ticketPanel,
  currentTask,
  status
})

export default index 
