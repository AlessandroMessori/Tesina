import React from 'react'
import './index.scss'

const Video = (props) => (<video className="video-section" controls>
  <source src={props.src} type="video/mp4"/>
</video>)

export default Video
