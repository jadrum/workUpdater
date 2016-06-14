import { combineReducers } from 'redux'
import updater from './updater'
import form from './form'

const updaterApp = combineReducers({
  updater,
  form
})

export default updaterApp
