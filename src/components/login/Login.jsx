import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginCreate from './login-create/LoginCreate'
import LoginForm from './login-form/LoginForm'
import LoginPasswordLost from './login-password/LoginPasswordLost'
import LoginPasswordReset from './login-reset/LoginPasswordReset'
import styles from './Login.module.scss'
import NotFound from './../../page/not-found/NotFound'
import Head from '../helper/Head'
import { useSelector } from 'react-redux'
import Loading from '../helper/Loading'

function Login() {
	const { data, loading } = useSelector((state) => state.user)

	if (loading) return <Loading />
	if (data) return <Navigate to="/conta" />
	return (
		<section className={styles.login}>
			<Head title="Login" />
			<div className={styles.forms}>
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="create" element={<LoginCreate />} />
					<Route path="lost" element={<LoginPasswordLost />} />
					<Route path="reset" element={<LoginPasswordReset />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</section>
	)
}

export default Login
