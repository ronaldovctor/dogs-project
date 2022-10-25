import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from '../../helper/Image'
import PhotoComments from '../photo-comments/PhotoComments'
import PhotoDelete from '../photo-delete/PhotoDelete'
import styles from './PhotoContent.module.scss'

function PhotoContent({ single }) {
	const { user } = useSelector((state) => state)
	const { photo, comments } = useSelector((state) => state.photo.data)

	return (
		<div className={`${styles.photo} ${single ? styles.single : ''}`}>
			<div className={styles.img}>
				<Image alt={photo.title} src={photo.src} />
			</div>
			<div className={styles.details}>
				<p className={styles.author}>
					{user.data && user.data.username === photo.author ? (
						<PhotoDelete id={photo.id} />
					) : (
						<Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
					)}
					<span className={styles.visualizacoes}>{photo.acessos}</span>
				</p>
				<h1 className="title">
					<Link to={`/foto/${photo.id}`}>{photo.title}</Link>
				</h1>
				<ul className={styles.attributes}>
					<li>{photo.peso} kg</li>
					<li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
				</ul>
			</div>
			<PhotoComments id={photo.id} comments={comments} single={single} />
		</div>
	)
}

export default PhotoContent
