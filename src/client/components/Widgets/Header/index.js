import React from 'react'
import {PageHeader} from 'react-bootstrap'
import './index.scss'

const Header = (props) => (<section className='header-section'>
  <PageHeader className='header'>{props.title}</PageHeader>
</section>)

export default Header
