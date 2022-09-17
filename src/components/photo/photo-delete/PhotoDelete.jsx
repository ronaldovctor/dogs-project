import React from 'react'
import { PHOTO_DELETE } from '../../../api/api'
import useFetch from '../../../hooks/useFetch'
import styles from './PhotoDelete.module.scss'

function PhotoDelete({ id }) {
	const token = window.localStorage.getItem('token')
	const { request, loading } = useFetch()

	async function handleClick() {
		const confirm = window.confirm('Tem certeza que deseja deletar?')
		if (confirm) {
			const { url, options } = PHOTO_DELETE(id, token)
			const { response } = await request(url, options)
			if (response.ok) window.location.reload()
		}
	}

	return (
		<>
			{loading ? (
				<button disabled className={styles.delete}>
					Deletando
				</button>
			) : (
				<button className={styles.delete} onClick={handleClick}>
					Deletar
				</button>
			)}
		</>
	)
}

export default PhotoDelete
