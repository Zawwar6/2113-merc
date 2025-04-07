import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Video from '../components/Video'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='h-screen  bg-white'>

      <Hero></Hero>
      <Services></Services>
      <Video></Video>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home