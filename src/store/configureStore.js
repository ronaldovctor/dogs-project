import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import photo from './photo'
import token from './token'
import user from './user'
import feed from './feed'

const reducer = combineReducers({ photo, token, user, feed })
const store = configureStore({
	reducer,
	middleware: [thunk],
})

export default store
