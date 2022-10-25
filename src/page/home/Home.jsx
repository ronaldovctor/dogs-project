import React from 'react'
import Head from '../../components/helper/Head'
import Feed from './../../components/feed/Feed'

function Home() {
	return (
		<section className="container mainContainer">
			<Head title="Fotos" description="Home do site Dogs, com o feed de fotos." />
			<Feed user={0} />
		</section>
	)
}

export default Home
