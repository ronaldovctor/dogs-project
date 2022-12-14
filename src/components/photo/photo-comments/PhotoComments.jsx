import React, { useContext, useEffect, useRef, useState } from 'react'
import PhotoCommentsForm from '../photo-comments-form/PhotoCommentsForm'
import UserContext from '../../../context/UserContext'
import styles from './PhotoComments.module.scss'

function PhotoComments(props) {
	const [comments, setComments] = useState(() => props.comments)
	const { login } = useContext(UserContext)
	const commentSection = useRef(null)

	useEffect(() => {
		commentSection.current.scrollTop = commentSection.current.scrollHeight
	}, [comments])

	return (
		<>
			<ul
				ref={commentSection}
				className={`${styles.comments} ${props.single ? styles.single : ''}`}
			>
				{comments.map((comment) => (
					<li key={comment.comment_ID}>
						<b>{comment.comment_author}: </b>
						<span>{comment.comment_content}</span>
					</li>
				))}
			</ul>
			{login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
		</>
	)
}

export default PhotoComments
