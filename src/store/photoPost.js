import { PHOTO_POST } from '../api/api'
import createAsyncSlice from '../store/helper/createAsyncSlice'

const photoPostSlice = createAsyncSlice({
	name: 'photoPost',
	fetchConfig: ({ formData, token }) => PHOTO_POST(formData, token),
})

export const photoPost = photoPostSlice.asyncAction

export default photoPostSlice.reducer
