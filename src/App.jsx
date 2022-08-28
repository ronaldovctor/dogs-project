import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Login from './components/login/Login'
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
						<Route path='/login/*' element={<Login />} />
					</Routes>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
