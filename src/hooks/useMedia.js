import React, { useEffect, useState } from 'react'

function useMedia(media) {
	const [mobile, setMobile] = useState(null)

	useEffect(() => {
		function changeMatch() {
			const { matches } = window.matchMedia(media)
			setMobile(matches)
		}
		changeMatch()
		window.addEventListener('resize', changeMatch)

		return () => {
			window.removeEventListener('resize', changeMatch)
		}
	}, [media])

	return { mobile }
}

export default useMedia
