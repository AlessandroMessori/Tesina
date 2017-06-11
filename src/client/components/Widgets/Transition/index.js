import React from 'react'
import Hive from '../../Pages/Hive/index'
import './index.scss'

const Transition = (props) => (<div className='transition-section'>
  {!props.loaded ? (<Hive/>) : props.component}
</div>)

export default Transition