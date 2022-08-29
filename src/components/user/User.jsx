import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import UserHeader from './user-header/UserHeader'
import UserPhotoPost from './user-photo-post/UserPhotoPost'
import UserStats from './user-stats/UserStats'

function User() {
	return (
		<section className='container'>
			<UserHeader />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='postar' element={<UserPhotoPost />} />
				<Route path='estatisticas' element={<UserStats />} />
			</Routes>
		</section>
	)
}

export default User
