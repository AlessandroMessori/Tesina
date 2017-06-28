import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ConsoleText from '../../Widgets/ConsoleText'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Cinema = (props) => (<div className='origin-section container-fluid'>
  <NavBar black/>
  <Jumbotron className="content-wrapper">
    <ConsoleText id="text1">The Terminator</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/android.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/terminator.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#matrix'/>
  </Jumbotron>
  <Jumbotron id='matrix' className='container-fluid content-wrapper'>
    <ConsoleText id="text2">The Matrix</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/numbers.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/matrix.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn3' target='#inTime'/>
  </Jumbotron>
  <Jumbotron id='inTime' className='container-fluid content-wrapper'>
    <ConsoleText id="text3">In Time</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/intime.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/clock.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Cinema
