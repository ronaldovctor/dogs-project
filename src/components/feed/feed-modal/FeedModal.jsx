import React, { useEffect } from 'react'
import styles from './FeedModal.module.scss'
import { PHOTO_GET } from '../../../api/api'
import Error from '../../helper/Error'
import Loading from '../../helper/Loading'
import PhotoContent from '../../photo/photo-content/PhotoContent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto } from '../../../store/photo'

function FeedModal({ photo, setModalPhoto }) {
	function handleOutsideClick({ target, currentTarget }) {
		if (target === currentTarget) setModalPhoto(null)
	}

	const { data, loading, error } = useSelector((state) => state.photo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPhoto(photo.id))
	}, [dispatch, photo])

	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data} />}
		</div>
	)
}

export default FeedModal
