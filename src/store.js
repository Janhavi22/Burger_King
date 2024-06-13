import {combineReducers,applyMiddleware} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import { thunk } from 'redux-thunk' 
import { composeWithDevTools } from '@redux-devtools/extension'
import { getAllBurgersReducer } from './reducers/burgerReducer'
const finalReducer = combineReducers({
    getAllBurgersReducer : getAllBurgersReducer
})
const initialState = {}
const composeEnhancers = composeWithDevTools({})


const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store 