import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import ConsoleText from '../../Widgets/ConsoleText'
import NavBar from '../../Widgets/NavBar'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Origin = (props) => (<div className='literature-section container-fluid'>
  <NavBar black/>
  <Jumbotron id="1984" className="content-wrapper">
    <ConsoleText id="title10">1984</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/big-brother.png" role='presentation'/>
    <img className="col-md-6" src="images/1984.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#fahrenheit'/>
  </Jumbotron>
  <Jumbotron id='fahrenheit' className='content-wrapper container-fluid'>
    <ConsoleText id="title1ds0">Fahrenheit 451</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/fireman.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/library.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn3' target='#new-world'/>
  </Jumbotron>
  <Jumbotron id='new-world' className='content-wrapper container-fluid'>
    <ConsoleText id="titldfe10">Il Mondo Nuovo</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/new-world.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/babies.jpeg" role='presentation'/>
  </Jumbotron>
</div>)

export default Origin
