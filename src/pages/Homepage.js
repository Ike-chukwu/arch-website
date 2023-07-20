import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import Location from '../Components/Location/Location'
import Welcome from '../Components/Welcome/Welcome'
import Ideas from '../Components/Ideas/Ideas'
import Featured from '../Components/Featured/Featured'
import BottomNav from '../Components/BottomNav/BottomNav'


const Homepage = () => {
  return (
    <>
        <Location>Home</Location>
        <HeroSection/>
        <Welcome/>
        <Ideas/>
        <Featured/>
        <BottomNav/>
    </>
  )
}

export default Homepage