import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPhoto } from '../../store/photo'
import Head from '../helper/Head'
import Loading from '../helper/Loading'
import PhotoContent from './photo-content/PhotoContent'

function Photo() {
	const { id } = useParams()

	const { data, loading, error } = useSelector((state) => state.photo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPhoto(id))
	}, [dispatch, id])

	if (error) return <Error error={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<section className="container mainContainer">
				<Head title={data.photo.title} />
				<PhotoContent single={true} />
			</section>
		)
	else return null
}

export default Photo
