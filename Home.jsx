// eslint-disable-next-line no-unused-vars
import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from '../../Requests'

function Home() {
  return (
    <div>
      <Main/>
      <Row title='Up Coming' fetchURL={requests.upComing} />
      <Row title='Now playing' fetchURL={requests.nowPlaying} />
      <Row title='Popular' fetchURL={requests.popular} />
      <Row title='Top Rated' fetchURL={requests.topRated} />
      <Row title='Tv' fetchURL={requests.tv} />
    </div>
  )
}

export default Home
