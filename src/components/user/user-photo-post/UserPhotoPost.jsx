import React, { useEffect, useState } from 'react'
import styles from './UserPhotoPost.module.scss'
import useForm from './../../../hooks/useForm'
import Input from './../../forms/input/Input'
import Button from './../../forms/button/Button'
import Error from './../../helper/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../../helper/Head'
import { useDispatch, useSelector } from 'react-redux'
import { photoPost } from '../../../store/photoPost'

function UserPhotoPost() {
	const nome = useForm()
	const peso = useForm('number')
	const idade = useForm('number')

	const [img, setImg] = useState({})
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { token } = useSelector((state) => state.token.data)
	const { data, loading, error } = useSelector((state) => state.photoPost)

	function handleSubmit(event) {
		event.preventDefault()
		const formData = new FormData()
		formData.append('img', img.raw)
		formData.append('nome', nome.value)
		formData.append('peso', peso.value)
		formData.append('idade', idade.value)

		dispatch(photoPost({ formData, token }))
	}

	function handleImgChange({ target }) {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		})
	}

	useEffect(() => {
		if (data) navigate('/conta')
	}, [data, navigate])

	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<Head title="Poste sua foto" />
			<form onSubmit={handleSubmit}>
				<Input label="Nome" type="text" name="nome" {...nome} />
				<Input label="Peso" type="text" name="peso" {...peso} />
				<Input label="Idade" type="text" name="idade" {...idade} />
				<input
					type="file"
					name="img"
					id="img"
					className={styles.file}
					onChange={handleImgChange}
				/>
				{loading ? <Button disabled>Postando...</Button> : <Button>Postar</Button>}
				<Error error={error} />
			</form>
			{img.preview && (
				<div
					className={styles.preview}
					style={{
						backgroundImage: `url('${img.preview}`,
					}}
				></div>
			)}
		</section>
	)
}

export default UserPhotoPost
