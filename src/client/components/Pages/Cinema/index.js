import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ConsoleText from '../../Widgets/ConsoleText'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Cinema = (props) => (<div className='cinema-section container-fluid'>
  <NavBar black/>
  <Jumbotron className="content-wrapper">
    <ConsoleText id="text3">In Time</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/intime.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/clock.jpg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#matrix'/>
  </Jumbotron>
  <Jumbotron id='matrix' className='container-fluid content-wrapper'>
    <ConsoleText id="text2">Nerve</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/bike.jpg" role='presentation'/>
    <img className="col-md-6" src="images/dare.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Cinema
