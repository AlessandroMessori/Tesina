import React from 'react'
import NavBar from '../NavBar'
import SlideShow from '../SlideShow'
import Introduction from '../Introduction'
import slideData from '../../services/slideData'

const Home = () => (
  <section>
    <NavBar/>
    <SlideShow data={slideData}/>
    <Introduction/>
  </section>
)

export default Home
