import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import topicReducer from './topic'

export default combineReducers(
  Object.assign({}, topicReducer, {routing: routerReducer})
)