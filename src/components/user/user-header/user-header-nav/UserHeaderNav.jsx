import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as MinhasFotos } from '../../../../assets/feed.svg'
import { ReactComponent as Estatiticas } from '../../../../assets/estatisticas.svg'
import { ReactComponent as Adicionar } from '../../../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../../../assets/sair.svg'
import styles from './UserHeaderNav.module.scss'
import useMedia from '../../../../hooks/useMedia'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../../../store/user'

function UserHeaderNav() {
	const dispatch = useDispatch()
	const { mobile } = useMedia('(max-width: 40rem)')
	const [mobileMenu, setMobileMenu] = useState(false)

	const { pathname } = useLocation()
	useEffect(() => {
		setMobileMenu(false)
	}, [pathname])

	return (
		<>
			{mobile && (
				<button
					aria-label="Menu"
					className={`${styles.mobileButton} ${
						mobileMenu && styles.mobileButtonActive
					}`}
					onClick={() => setMobileMenu(!mobileMenu)}
				></button>
			)}
			<nav
				className={`${mobile ? styles.navMobile : styles.nav} ${
					mobileMenu && styles.navMobileActive
				}`}
			>
				<NavLink to="/conta" end>
					<MinhasFotos />
					{mobile && 'Minhas Fotos'}
				</NavLink>
				<NavLink to="/conta/estatisticas">
					<Estatiticas />
					{mobile && 'Estatísticas'}
				</NavLink>
				<NavLink to="/conta/postar">
					<Adicionar />
					{mobile && 'Adicionar Fotos'}
				</NavLink>
				<button onClick={() => dispatch(userLogout())}>
					<Sair />
					{mobile && 'Sair'}
				</button>
			</nav>
		</>
	)
}

export default UserHeaderNav
