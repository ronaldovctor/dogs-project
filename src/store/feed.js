import { PHOTOS_GET } from '../api/api'
import createAsyncSlice from './helper/createAsyncSlice'

const feed = createAsyncSlice({
	name: 'feed',
	initialState: {
		list: [],
		pages: 1,
		infinite: true,
	},
	reducers: {
		addPhotos(state, action) {
			state.list.push(...action.payload)
			if (action.payload.length === 0) state.infinite = false
		},
		addPage(state) {
			state.pages++
		},
		resetState(state) {
			state.inifinite = true
			state.list = []
			state.pages = 1
			state.data = null
			state.error = null
			state.loading = false
		},
	},
	fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
})

export const fetchFeed = feed.asyncAction
export const { addPhotos, addPage, resetState: resetFeedState, fetchError } = feed.actions

export const loadNewPhotos =
	({ total = 6, user }) =>
	async (dispatch, getState) => {
		try {
			const { feed } = getState()
			const { payload } = await dispatch(fetchFeed({ page: feed.pages, total, user }))
			dispatch(addPage())
			dispatch(addPhotos(payload))
		} catch (error) {
			dispatch(fetchError(error.message))
		}
	}

export default feed.reducer
