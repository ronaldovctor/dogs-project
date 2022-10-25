import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadNewPhotos, resetFeedState } from '../../store/feed'
import Error from '../helper/Error'
import Loading from '../helper/Loading'
import FeedModal from './feed-modal/FeedModal'
import FeedPhotos from './feed-photos/FeedPhotos'

function Feed({ user }) {
	const [modalPhoto, setModalPhoto] = useState(null)
	const { infinite, loading, list, error } = useSelector((state) => state.feed)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(resetFeedState())
		dispatch(loadNewPhotos({ user, total: 6 }))
	}, [dispatch, user])

	useEffect(() => {
		let wait = false
		function infiniteScrool() {
			if (infinite) {
				const scroll = window.scrollY
				const height = document.body.offsetHeight - window.innerHeight
				if (scroll > height * 0.75 && !wait) {
					dispatch(loadNewPhotos({ user, total: 6 }))
					wait = true
					setTimeout(() => {
						wait = false
					}, 500)
				}
			}
		}

		window.addEventListener('wheel', infiniteScrool)
		window.addEventListener('scrool', infiniteScrool)

		return () => {
			window.removeEventListener('wheel', infiniteScrool)
			window.removeEventListener('scrool', infiniteScrool)
		}
	}, [infinite, dispatch, user])

	return (
		<>
			{loading && <Loading />}
			{list.length > 0 && <FeedPhotos setModalPhoto={setModalPhoto} />}
			{error && <Error error={error} />}
			{modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
		</>
	)
}

export default Feed
