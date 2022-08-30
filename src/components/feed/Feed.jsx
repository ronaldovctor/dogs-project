import React, { useState } from 'react'
import FeedModal from './feed-modal/FeedModal'
import FeedPhotos from './feed-photos/FeedPhotos'

function Feed() {
	const [modalPhoto, setModalPhoto] = useState(null)

	return (
		<div>
			<FeedPhotos setModalPhoto={setModalPhoto} />
			{modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
		</div>
	)
}

export default Feed
