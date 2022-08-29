import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import ProtectedRoute from './components/helper/ProtectedRoute'
import Login from './components/login/Login'
import User from './components/user/User'
import { UserStorage } from './context/UserContext'
import Footer from './page/footer/Footer'
import Header from './page/header/Header'
import Home from './page/home/Home'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<UserStorage>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='login/*' element={<Login />} />
						<Route
							path='conta/*'
							element={
								<ProtectedRoute>
									<User />
								</ProtectedRoute>
							}
						/>
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
