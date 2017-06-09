import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import Introduction from '../Introduction'
import background from '../../assets/images/wallpaper.jpg'


const Home = (props) => (
  <section>
    <section>
      <NavBar/>
      <Hero background={background}>
        <h1>le distopie e il progresso</h1>
        <h2>Il Progresso è pericoloso?</h2>
      </Hero>
      <Introduction/>
    </section>
    }
  </section>
)

export default Home
