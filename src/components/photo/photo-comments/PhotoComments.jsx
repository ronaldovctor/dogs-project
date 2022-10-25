import React, { useEffect, useRef, useState } from 'react'
import PhotoCommentsForm from '../photo-comments-form/PhotoCommentsForm'
import styles from './PhotoComments.module.scss'
import { useSelector } from 'react-redux'

function PhotoComments(props) {
	const [comments, setComments] = useState(() => props.comments)
	const { data } = useSelector((state) => state.user)
	const commentSection = useRef(null)

	useEffect(() => {
		if (comments.length)
			commentSection.current.scrollTop = commentSection.current.scrollHeight
	}, [comments])

	return (
		<>
			<ul
				ref={commentSection}
				className={`${styles.comments} ${props.single ? styles.single : ''} ${
					!comments.length ? styles.nocomments : ''
				}`}
			>
				{comments.map((comment) => (
					<li key={comment.comment_ID}>
						<b>{comment.comment_author}: </b>
						<span>{comment.comment_content}</span>
					</li>
				))}
			</ul>
			{data && <PhotoCommentsForm id={props.id} setComments={setComments} />}
		</>
	)
}

export default PhotoComments
