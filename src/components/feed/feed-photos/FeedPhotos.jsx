import React from 'react'
import FeedPhotoItem from './feed-photo-item/FeedPhotoItem'
import styles from './FeedPhotos.module.scss'
import { useSelector } from 'react-redux'

function FeedPhotos({ setModalPhoto }) {
	const { list } = useSelector((state) => state.feed)

	return (
		<>
			<ul className={`${styles.feed} animeLeft`}>
				{list.map((photo) => (
					<FeedPhotoItem
						key={photo.id}
						photo={photo}
						setModalPhoto={setModalPhoto}
					/>
				))}
			</ul>
		</>
	)
}

export default FeedPhotos
