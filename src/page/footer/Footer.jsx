import React from 'react'
import styles from './Footer.module.scss'
import { ReactComponent as Dogs } from './../../assets/dogs-footer.svg'

function Footer() {
	return (
		<footer className={styles.footer}>
			<Dogs />
			<p>Dogs. Alguns direitos reservados</p>
		</footer>
	)
}

export default Footer
