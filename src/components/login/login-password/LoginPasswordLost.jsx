import React from 'react'
import Input from './../../forms/input/Input'
import Button from './../../forms/button/Button'
import styles from './LoginPassword.module.scss'
import useForm from './../../../hooks/useForm'
import useFetch from '../../../hooks/useFetch'
import { PASSWORD_LOST } from '../../../api/api'
import Error from '../../helper/Error'
import Head from '../../helper/Head'

function LoginPasswordLost() {
	const login = useForm()
	const { data, loading, error, request } = useFetch()

	async function handleSubmit(event) {
		event.preventDefault()
		if (email.validate()) {
			const { url, options } = PASSWORD_LOST({
				login: login.value,
				url: window.location.href.replace('lost', 'reset'),
			})
			await request(url, options)
		}
	}

	return (
		<section className='animeLeft'>
			<Head title='Perdeu a senha?' />
			<h1 className='title'>Perdeu a senha?</h1>
			{data ? (
				<p
					style={{
						color: '#4c1',
					}}
				>
					Email enviado.
				</p>
			) : (
				<form onSubmit={handleSubmit}>
					<Input label='Email / Usuário' type='text' name='login' {...login} />
					{loading ? (
						<Button disabled>Enviando...</Button>
					) : (
						<Button>Enviar email</Button>
					)}
				</form>
			)}
			<Error error={error} />
		</section>
	)
}

export default LoginPasswordLost
