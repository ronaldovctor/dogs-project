import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import Dogs from '../../assets/dogs.svg'
import UserContext from '../../context/UserContext'

function Header() {
	const { data, userLogout } = useContext(UserContext)

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<NavLink to='/' className={styles.logo} aria-label='Dogs - Home'>
					<img src={Dogs} alt='logo' />
				</NavLink>
				{data ? (
					<>
						<NavLink to='/conta' className={styles.login}>
							{data.nome}
						</NavLink>
						<button onClick={userLogout}>Sair</button>
					</>
				) : (
					<NavLink to='/login' className={styles.login}>
						Login / Criar
					</NavLink>
				)}
			</nav>
		</header>
	)
}

export default Header
