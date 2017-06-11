import React from 'react'
import {Glyphicon} from 'react-bootstrap'
import scrollTo from 'scroll-to-element'
import './index.scss'

const ScrollBtn = (props) => (
  <Glyphicon className='downBtn' onClick={() => scrollTo(props.target)} glyph='menu-down' {...props}/>)

export default ScrollBtn
