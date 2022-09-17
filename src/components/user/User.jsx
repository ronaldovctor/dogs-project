import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import NotFound from '../../page/not-found/NotFound'
import Feed from '../feed/Feed'
import Head from '../helper/Head'
import UserHeader from './user-header/UserHeader'
import UserPhotoPost from './user-photo-post/UserPhotoPost'
import UserStats from './user-stats/UserStats'

function User() {
	const { data } = useContext(UserContext)

	return (
		<section className='container mainContainer'>
			<UserHeader />
			<Head title='Minha Conta' />
			<Routes>
				<Route path='/' element={<Feed user={data.id} />} />
				<Route path='postar' element={<UserPhotoPost />} />
				<Route path='estatisticas' element={<UserStats />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</section>
	)
}

export default User
