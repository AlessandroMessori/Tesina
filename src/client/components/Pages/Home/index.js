import React from 'react'
import NavBar from '../../Widgets/NavBar/index'
import Hero from '../../Widgets/Hero/index'
import StartButton from '../../Widgets/StartButton/index'
import './index.scss'

const Home = () => (<section className='home-section'>
  <section>
    <NavBar color='black'/>
    <Hero background={'./images/wallpaper.jpg'}>
      <h1>le distopie e il progresso</h1>
      <StartButton href={'/utopia'}/>
    </Hero>
  </section>
</section>)


export default Home
