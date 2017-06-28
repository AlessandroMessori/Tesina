import React from 'react'
import Hive from '../../Pages/Hive/index'
import './index.scss'

const Transition = (props) => {
  document.body.style.overflowY = 'hidden'

  //const {location} = window
  //if (location.pathname === '/blackMirror') window.setTimeout(() => document.body.style.overflowY = 'scroll', 20000)
  //else if (location.pathname !== '/') window.setTimeout(() => document.body.style.overflowY = 'scroll', 2000)

  return (<div className='transition-section'>
    {!props.loaded ? (<Hive/>) : props.component}
  </div>)
}

export default Transition
