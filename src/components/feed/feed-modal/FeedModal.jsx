import React from 'react'
import styles from './FeedModal.module.scss'
import Error from '../../helper/Error'
import Loading from '../../helper/Loading'
import PhotoContent from '../../photo/photo-content/PhotoContent'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../store/ui'
import { useEffect } from 'react'

function FeedModal() {
	const { modal } = useSelector((state) => state.ui)

	function handleOutsideClick({ target, currentTarget }) {
		if (target === currentTarget) dispatch(closeModal())
	}

	const { data, loading, error } = useSelector((state) => state.photo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(closeModal())
	}, [dispatch])

	if (!modal) return null
	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent />}
		</div>
	)
}

export default FeedModal
