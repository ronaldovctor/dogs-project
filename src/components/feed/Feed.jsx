import React, { useEffect, useState } from 'react'
import FeedModal from './feed-modal/FeedModal'
import FeedPhotos from './feed-photos/FeedPhotos'

function Feed({ user }) {
	const [modalPhoto, setModalPhoto] = useState(null)
	const [pages, setPages] = useState([1])
	const [infinite, setInfinite] = useState(true)

	useEffect(() => {
		let wait = false
		function infiniteScrool() {
			if (infinite) {
				const scroll = window.scrollY
				const height = document.body.offsetHeight - window.innerHeight
				if (scroll > height * 0.75 && !wait) {
					setPages((pages) => [...pages, pages.length + 1])
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
	}, [infinite])

	return (
		<>
			{pages.map((page) => (
				<FeedPhotos
					key={page}
					page={page}
					user={user}
					setModalPhoto={setModalPhoto}
					setInfinite={setInfinite}
				/>
			))}
			{modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
		</>
	)
}

export default Feed
