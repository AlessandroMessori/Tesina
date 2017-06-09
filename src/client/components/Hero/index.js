import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import './index.scss'

const style = (background) => ({
  backgroundImage: `url(${background})`,
})

const Hero = (props) => (<Jumbotron style={style(props.background)} className='hero-section'>
  <section className="container">{props.children}</section>
</Jumbotron>)

export default Hero
