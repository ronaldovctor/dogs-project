import React from 'react'
import Image from '../../../helper/Image'
import styles from './FeedPhotosItem.module.scss'

function FeedPhotoItem({ photo, setModalPhoto }) {
	function handleClick() {
		setModalPhoto(photo)
	}

	return (
		<li className={styles.photo} onClick={handleClick}>
			<Image alt={photo.title} src={photo.src} />
			<span className={styles.visualizacao}>{photo.acessos}</span>
		</li>
	)
}

export default FeedPhotoItem
