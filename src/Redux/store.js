import  {legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import { appReducer } from './App/appReducer'
import { authReducer } from './Auth/authReducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({appReducer,authReducer})
const middleware = [thunk];
export const store = legacy_createStore(rootReducer,applyMiddleware(...middleware))