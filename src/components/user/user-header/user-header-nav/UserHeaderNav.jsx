import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../../context/UserContext'
import { ReactComponent as MinhasFotos } from '../../../../assets/feed.svg'
import { ReactComponent as Estatiticas } from '../../../../assets/estatisticas.svg'
import { ReactComponent as Adicionar } from '../../../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../../../assets/sair.svg'
import styles from './UserHeaderNav.module.scss'

function UserHeaderNav() {
	const [mobile, setMobile] = useState(null)
	const { userLogout } = useContext(UserContext)

	return (
		<nav className={styles.nav}>
			<NavLink to='/conta' end>
				<MinhasFotos />
				{mobile && 'Minhas Fotos'}
			</NavLink>
			<NavLink to='/conta/estatisticas'>
				<Estatiticas />
				{mobile && 'Estatísticas'}
			</NavLink>
			<NavLink to='/conta/postar'>
				<Adicionar />
				{mobile && 'Adicionar Fotos'}
			</NavLink>
			<button onClick={userLogout}>
				<Sair />
				{mobile && 'Sair'}
			</button>
		</nav>
	)
}

export default UserHeaderNav
