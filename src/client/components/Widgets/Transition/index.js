import React from 'react'
import Hive from '../../Pages/Hive/index'
import './index.scss'

const Transition = (props) => {

  const {location} = window

  if (location.pathname === '/') document.body.style.overflowY = 'hidden'
  else window.setTimeout(() => document.body.style.overflowY = 'scroll', 2000)

  return (<div className='transition-section'>
    {!props.loaded ? (<Hive/>) : props.component}
  </div>)
}

export default Transition
