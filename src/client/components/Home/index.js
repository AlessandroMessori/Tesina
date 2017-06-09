import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import Hive from '../Hive'
import Introduction from '../Introduction'
import background from '../../assets/images/wallpaper.jpg'


const Home = (props) => (
  <section>

    {!props.loaded && <Hive/>}

    {props.loaded &&
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
