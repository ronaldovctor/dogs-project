import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import LoginCreate from './login-create/LoginCreate'
import LoginForm from './login-form/LoginForm'
import LoginPasswordLost from './login-password/LoginPasswordLost'
import LoginPasswordReset from './login-reset/LoginPasswordReset'
import styles from './Login.module.scss'

function Login() {
	const { login } = useContext(UserContext)
	if (login === true) return <Navigate to='/conta' />
	return (
		<section className={styles.login}>
			<div className={styles.forms}>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='create' element={<LoginCreate />} />
					<Route path='lost' element={<LoginPasswordLost />} />
					<Route path='reset' element={<LoginPasswordReset />} />
				</Routes>
			</div>
		</section>
	)
}

export default Login
