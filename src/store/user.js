import { USER_GET } from '../api/api'
import createAsyncSlice from './helper/createAsyncSlice'
import { fetchToken, resetTokenState } from './token'

const user = createAsyncSlice({
	name: 'user',
	fetchConfig: (token) => USER_GET(token),
})

export const fetchUser = user.asyncAction
const { resetState: resetUserState, fetchError } = user.actions

export const userLogin = (user) => async (dispatch) => {
	try {
		const { payload } = await dispatch(fetchToken(user))
		if (payload.token) {
			window.localStorage.setItem('token', payload.token)
			await dispatch(fetchUser(payload.token))
		}
	} catch (error) {
		throw new Error(error.message)
	}
}

export const userLogout = () => (dispatch) => {
	dispatch(resetUserState())
	dispatch(resetTokenState())
	window.localStorage.removeItem('token')
}

export const autoLogin = () => async (dispatch, getState) => {
	const { token } = getState()
	if (token?.data?.token) {
		const { type } = await dispatch(fetchUser(token.data.token))
		if (type === fetchError.type) dispatch(userLogout())
	}
}

export default user.reducer
