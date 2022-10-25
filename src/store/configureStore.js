import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import photo from '../store/photo'

const reducer = combineReducers({ photo })
const store = configureStore({
	reducer,
	middleware: [thunk],
})

export default store
