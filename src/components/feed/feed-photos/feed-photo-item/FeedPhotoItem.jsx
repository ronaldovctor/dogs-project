import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPhoto } from '../../../../store/photo'
import { openModal } from '../../../../store/ui'
import Image from '../../../helper/Image'
import styles from './FeedPhotosItem.module.scss'

function FeedPhotoItem({ photo }) {
	const dispatch = useDispatch()

	function handleClick() {
		dispatch(openModal())
		dispatch(fetchPhoto(photo.id))
	}

	return (
		<li className={styles.photo} onClick={handleClick}>
			<Image alt={photo.title} src={photo.src} />
			<span className={styles.visualizacao}>{photo.acessos}</span>
		</li>
	)
}

export default FeedPhotoItem
