import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ConsoleText from '../../Widgets/ConsoleText'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Cinema = (props) => (<div className='cinema-section container-fluid'>
  <NavBar black/>

  <Jumbotron id='matrix' className='container-fluid content-wrapper'>
    <ConsoleText id="text2fpdèof">Nerve</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/bike.jpg" role='presentation'/>
    <img className="col-md-6" src="images/dare.jpg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#memories'/>
  </Jumbotron>
  <Jumbotron id='memories' className='container-fluid content-wrapper'>
    <ConsoleText id="text5djldkfjkl">Ricordi Pericolosi</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/memories.png" role='presentation'/>
    <img className="col-md-6" src="images/grain.jpg" role='presentation'/>
    <ScrollBtn id='scrollBtn2' target='#fall'/>
  </Jumbotron>
  <Jumbotron id='fall' className='container-fluid content-wrapper'>
    <ConsoleText id="text20dssdsytyr">Caduta Libera</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/score.jpg" role='presentation'/>
    <img className="col-md-6" src="images/phone.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Cinema
