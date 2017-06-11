import React from 'react'
import {Carousel, Button} from 'react-bootstrap'
import scrollToElement from 'scroll-to-element'
import './index.scss'

const SlideShow = (props) => (<Carousel className="slideshow-section">
  {
    props.data.map(item => (
      <Carousel.Item key={item.title}>
        <img alt={item.title} src={item.image}/>
        <Carousel.Caption>
          <h1>{item.title}</h1>
          <h3>{item.text}</h3>
          <Button onClick={() => scrollToElement('#intro', {offset: -50})}>Leggi L'Introduzione</Button>
        </Carousel.Caption>
      </Carousel.Item>
    ))
  }
</Carousel>)

export default SlideShow
