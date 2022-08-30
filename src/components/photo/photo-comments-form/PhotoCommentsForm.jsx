import React, { useState } from 'react'
import { COMMENT_POST } from '../../../api/api'
import useFetch from '../../../hooks/useFetch'
import Error from '../../helper/Error'
import { ReactComponent as Enviar } from './../../../assets/enviar.svg'
import styles from './PhotoCommentsForm.module.scss'

function PhotoCommentsForm({ id, setComments }) {
	const { request, error } = useFetch()
	const [comment, setComment] = useState('')

	async function handleSubmit(event) {
		event.preventDefault()
		const token = window.localStorage.getItem('token')
		const { url, options } = COMMENT_POST(id, token, { comment })
		const { response, json } = await request(url, options)
		if (response.ok) {
			setComment('')
			setComments((comments) => [...comments, json])
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<textarea
				className={styles.textarea}
				id='comment'
				value={comment}
				placeholder='Comente...'
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Enviar />
			</button>
			<Error error={error} />
		</form>
	)
}

export default PhotoCommentsForm
