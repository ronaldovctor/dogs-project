import React, { useEffect } from 'react'
import FeedPhotoItem from './feed-photo-item/FeedPhotoItem'
import useFetch from './../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../api/api'
import Error from './../../helper/Error'
import Loading from '../../helper/Loading'
import styles from './FeedPhotos.module.scss'

function FeedPhotos({ setModalPhoto }) {
	const { data, loading, error, request } = useFetch()

	useEffect(() => {
		async function fetchPhotos() {
			const { url, options } = PHOTOS_GET({
				page: 1,
				total: 6,
				user: 0,
			})
			const { response, json } = await request(url, options)
		}
		fetchPhotos()
	}, [request])
	if (error) return <Error error={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<div>
				<ul className={`${styles.feed} animeLeft`}>
					{data.map((photo) => (
						<FeedPhotoItem
							key={photo.id}
							photo={photo}
							setModalPhoto={setModalPhoto}
						/>
					))}
				</ul>
			</div>
		)
}

export default FeedPhotos
