import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import LoginCreate from './login-create/LoginCreate'
import LoginForm from './login-form/LoginForm'
import LoginPasswordLost from './login-password/LoginPasswordLost'
import LoginPasswordReset from './login-reset/LoginPasswordReset'
import styles from './Login.module.scss'
import NotFound from './../../page/not-found/NotFound'
import Head from '../helper/Head'

function Login() {
	const { login } = useContext(UserContext)

	if (login === true) return <Navigate to='/conta' />
	return (
		<section className={styles.login}>
			<Head title='Login' />
			<div className={styles.forms}>
				<Routes>
					<Route path='/' element={<LoginForm />} />
					<Route path='create' element={<LoginCreate />} />
					<Route path='lost' element={<LoginPasswordLost />} />
					<Route path='reset' element={<LoginPasswordReset />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</section>
	)
}

export default Login
