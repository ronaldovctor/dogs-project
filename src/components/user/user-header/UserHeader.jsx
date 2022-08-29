import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './user-header-nav/UserHeaderNav'
import styles from './UserHeader.module.scss'

function UserHeader() {
	const [title, setTitle] = useState('')
	const location = useLocation()

	useEffect(() => {
		const { pathname } = location

		if (pathname.includes('estatisticas')) return setTitle('estatísticas')
		if (pathname.includes('postar')) return setTitle('postar')
		if (pathname.includes('conta')) return setTitle('conta')
	}, [location])

	return (
		<header className={styles.header}>
			<h1 className='title'>{title}</h1>
			<UserHeaderNav />
		</header>
	)
}

export default UserHeader
