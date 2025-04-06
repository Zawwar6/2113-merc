import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Video from '../components/Video'



const Home = () => {
  return (
    <div className='h-screen  bg-white'>

      <Hero></Hero>
      <Services></Services>
      <Video></Video>
    </div>
  )
}

export default Home