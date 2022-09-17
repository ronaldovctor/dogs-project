import React, { useEffect } from 'react'
import FeedPhotoItem from './feed-photo-item/FeedPhotoItem'
import useFetch from './../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../api/api'
import Error from './../../helper/Error'
import Loading from '../../helper/Loading'
import styles from './FeedPhotos.module.scss'

function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
	const { data, loading, error, request } = useFetch()

	useEffect(() => {
		async function fetchPhotos() {
			const total = 6
			const { url, options } = PHOTOS_GET({
				page,
				total,
				user,
			})
			const { response, json } = await request(url, options)
			if (response && response.ok && json.length < total) setInfinite(false)
		}
		fetchPhotos()
	}, [request, user, setInfinite])
	if (error) return <Error error={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<>
				<ul className={`${styles.feed} animeLeft`}>
					{data.map((photo) => (
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
