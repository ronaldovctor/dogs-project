import React, { lazy, useEffect } from 'react'
import Head from '../../helper/Head'
import useFetch from '../../../hooks/useFetch'
import { STATS_GET } from '../../../api/api'
import Loading from './../../helper/Loading'
import Error from './../../helper/Error'
const UserStatsGraphs = lazy(() => import('./user-stats-graphs/UserStatsGraphs'))

function UserStats() {
	const { data, error, loading, request } = useFetch()

	useEffect(() => {
		async function getData() {
			const token = window.localStorage.getItem('token')
			const { url, options } = STATS_GET(token)
			console.log(url, options)
			const { response } = await request(url, options)
			console.log(response)
		}
		getData()
	}, [])

	if (loading) return <Loading />
	if (error) return <Error error={error} />
	if (data)
		return (
			<React.Suspense fallback={<div></div>}>
				<Head title='Estatísticas' />
				<UserStatsGraphs data={data} />
			</React.Suspense>
		)
	else return null
}

export default UserStats
