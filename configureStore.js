import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import {routerReducer} from 'react-router-redux'

const loggerMiddleware = createLogger()

export default function configureStore() {
    return createStore(
        combineReducers(Object.assign({}, rootReducer,{routing:routerReducer})),
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}