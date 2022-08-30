import React, { useEffect } from 'react'
import styles from './FeedModal.module.scss'
import useFetch from './../../../hooks/useFetch'
import { PHOTO_GET } from '../../../api/api'
import Error from '../../helper/Error'
import Loading from '../../helper/Loading'
import PhotoContent from '../../photo/photo-content/PhotoContent'

function FeedModal({ photo, setModalPhoto }) {
	const { data, error, loading, request } = useFetch()

	function handleOutsideClick({ target, currentTarget }) {
		if (target === currentTarget) setModalPhoto(null)
	}

	useEffect(() => {
		async function getPhoto() {
			const { url, options } = PHOTO_GET(photo.id)
			request(url, options)
		}
		getPhoto()
	}, [photo, request])

	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data} />}
		</div>
	)
}

export default FeedModal
