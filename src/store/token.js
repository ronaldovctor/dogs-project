import { TOKEN_POST } from '../api/api'
import createAsyncSlice from './helper/createAsyncSlice'

const token = createAsyncSlice({
	name: 'token',
	initialState: {
		data: {
			token: window.localStorage.getItem('token') || null,
		},
	},
	fetchConfig: (user) => TOKEN_POST(user),
})

// fetchConfig will receive its parameter from execution of the
// action creator 'asyncAction'
export const fetchToken = token.asyncAction
export const { resetState: resetTokenState } = token.actions

export default token.reducer
