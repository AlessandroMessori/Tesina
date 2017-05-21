import React from 'react'
import NavBar from '../NavBar'
import SlideShow from '../SlideShow'
import slideData from '../../services/slideData'

const Home = () => (
  <section>
    <NavBar/>
    <SlideShow data={slideData}/>
  </section>
)

export default Home
