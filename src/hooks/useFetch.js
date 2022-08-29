import React, { useCallback, useState } from 'react'

function useFetch() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const request = useCallback(async (url, options) => {
		let response
		let json

		try {
			setError(null)
			setLoading(true)
			response = await fetch(url, options)
			if (!response.ok) {
				const status = await response.json()
				throw new Error(status.message)
			}
			json = await response.json()
			setData(json)
		} catch (err) {
			console.log(err)
			setError(err.message)
			json = null
		} finally {
			setData(json)
			setLoading(false)
			return { response, json }
		}
	}, [])

	return {
		data,
		loading,
		error,
		request,
	}
}

export default useFetch
