import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../../page/not-found/NotFound'
import Feed from '../feed/Feed'
import Head from '../helper/Head'
import UserHeader from './user-header/UserHeader'
import UserPhotoPost from './user-photo-post/UserPhotoPost'
import UserStats from './user-stats/UserStats'

function User() {
	const { data } = useSelector((state) => state.user)

	return (
		<section className="container mainContainer">
			<UserHeader />
			<Head title="Minha Conta" />
			<Routes>
				<Route path="/" element={<Feed user={data.id} />} />
				<Route path="postar" element={<UserPhotoPost />} />
				<Route path="estatisticas" element={<UserStats />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</section>
	)
}

export default User
