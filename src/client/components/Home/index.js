import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import StartButton from '../StartButton'
import background from '../../assets/images/wallpaper.jpg'


const Home = (props) => (
  <section>
    <section>
      <NavBar/>
      <Hero background={background}>
        <h1>le distopie e il progresso</h1>
        <StartButton/>
      </Hero>
    </section>
  </section>
)

export default Home
