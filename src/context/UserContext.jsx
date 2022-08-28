import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
	const [data, setData] = useState(null)
	const [login, setLogin] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	async function getUser(token) {
		const { url, options } = USER_GET(token)
		const response = await fetch(url, options)
		const json = await response.json()
		setData(json)
		setLogin(true)
	}

	async function userLogin(username, password) {
		try {
			setError(null)
			setLoading(true)
			const { url, options } = TOKEN_POST({ username, password })
			const response = await fetch(url, options)
			if (!response.ok) throw new Error(`Login Error`)
			const { token } = await response.json()
			window.localStorage.setItem('token', token)
			await getUser(token)
			navigate('/conta')
		} catch (error) {
			setError(error.message)
			setLogin(false)
		} finally {
			setLoading(false)
		}
	}

	const userLogout = useCallback(async () => {
		setData(null)
		setError(null)
		setLoading(false)
		setLogin(false)
		window.localStorage.removeItem('token')
		navigate('/login')
	}, [navigate])

	useEffect(() => {
		async function autoLogin() {
			const token = window.localStorage.getItem('token')
			if (token) {
				try {
					setError(null)
					setLoading(true)
					const { url, options } = TOKEN_VALIDATE_POST(token)
					const response = await fetch(url, options)
					if (!response.ok) throw new Error('Invalid Token.')
					await getUser(token)
				} catch (error) {
					setError(error.message)
					userLogout()
				} finally {
					setLoading(false)
				}
			}
		}

		autoLogin()
	}, [userLogout])

	return (
		<div>
			<UserContext.Provider
				value={{ data, loading, userLogin, userLogout, login, error }}
			>
				{children}
			</UserContext.Provider>
		</div>
	)
}

export default UserContext
