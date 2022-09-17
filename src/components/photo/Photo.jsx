import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../api/api'
import useFetch from '../../hooks/useFetch'
import Head from '../helper/Head'
import Loading from '../helper/Loading'
import PhotoContent from './photo-content/PhotoContent'

function Photo() {
	const { id } = useParams()
	const { data, loading, error, request } = useFetch()

	useEffect(() => {
		async function getPhoto() {
			const { url } = PHOTO_GET(id)
			await request(url, {})
		}
		getPhoto()
	}, [id, request])

	if (error) return <Error error={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<section className='container mainContainer'>
				<Head title={data.photo.title} />
				<PhotoContent data={data} single={true} />
			</section>
		)
	else return null
}

export default Photo
