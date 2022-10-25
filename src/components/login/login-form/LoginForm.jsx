import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../../context/UserContext'
import useForm from '../../../hooks/useForm'
import Button from '../../forms/button/Button'
import Input from '../../forms/input/Input'
import Error from '../../helper/Error'
import styles from './LoginForm.module.scss'
import stylesBtn from './../../forms/button/Button.module.scss'
import Head from '../../helper/Head'
import { userLogin } from '../../../store/user'
import { useDispatch, useSelector } from 'react-redux'

function LoginForm() {
	const username = useForm()
	const password = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { token, user } = useSelector((state) => state)
	const loading = token.loading || user.loading
	const error = token.error || user.error

	async function handleSubmit(event) {
		event.preventDefault()
		if (username.validate() && password.validate()) {
			await dispatch(userLogin({ username: username.value, password: password.value }))
			navigate('/conta')
		}
	}

	return (
		<section className="animeLeft">
			<Head title="Login" />

			<h1 className="title">Login</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name="username" {...username} />
				<Input label="Senha" type="password" name="password" {...password} />
				{loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
				<Error error={error && 'Dados incorretos.'} />
			</form>
			<Link className={styles.perdeu} to={'/login/lost'}>
				Perdeu a Senha?
			</Link>
			<div className={styles.cadastro}>
				<h2 className={styles.subtitle}>Cadastre-se</h2>
				<p>Ainda não possui conta? Cadastre-se no site.</p>
				<Link className={stylesBtn.button} to={'/login/create'}>
					Cadastro
				</Link>
			</div>
		</section>
	)
}

export default LoginForm
