import React from 'react'
import NavBar from '../../Widgets/NavBar/index'
import Hero from '../../Widgets/Hero/index'
import StartButton from '../../Widgets/StartButton/index'
import background from '../../../assets/images/wallpaper.jpg'

const Home = () => {
  return (<section>
    <section>
      <NavBar/>
      <Hero background={background}>
        <h1>le distopie e il progresso</h1>
        <StartButton href={'/origine'}/>
      </Hero>
    </section>
  </section>)
}

export default Home