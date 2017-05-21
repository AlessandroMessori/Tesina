import React from 'react'
import {Carousel} from 'react-bootstrap'
import './index.scss'

const SlideShow = (props) => (<Carousel className="slideshow-section">
  {
    props.data.map(item => (
      <Carousel.Item key={item.title}>
        <img alt={item.title} src={item.image}/>
        <Carousel.Caption>
          <h1>{item.title}</h1>
          <h3>{item.text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    ))
  }
</Carousel>)

export default SlideShow
