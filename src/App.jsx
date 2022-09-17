import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import ProtectedRoute from './components/helper/ProtectedRoute'
import Login from './components/login/Login'
import Photo from './components/photo/Photo'
import User from './components/user/User'
import UserProfile from './components/user/user-profile/UserProfile'
import { UserStorage } from './context/UserContext'
import Footer from './page/footer/Footer'
import Header from './page/header/Header'
import Home from './page/home/Home'
import NotFound from './page/not-found/NotFound'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<main className='AppBody'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='login/*' element={<Login />} />
							<Route path='foto/:id' element={<Photo />} />
							<Route path='perfil/:user' element={<UserProfile />} />
							<Route
								path='conta/*'
								element={
									<ProtectedRoute>
										<User />
									</ProtectedRoute>
								}
							/>
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
