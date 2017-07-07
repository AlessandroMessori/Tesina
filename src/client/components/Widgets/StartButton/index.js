import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

const StartButton = (props, context) => (<div className="startBtn col-md-3 col-sm-3 col-xs-6">
  <Link to="/utopia" className="btn btn-sm animated-button gibson-three">Entra</Link>
</div>)

export default StartButton
