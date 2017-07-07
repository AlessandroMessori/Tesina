import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import ConsoleText from '../../Widgets/ConsoleText'
import NavBar from '../../Widgets/NavBar'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Origin = (props) => (<div className='literature-section container-fluid'>
  <NavBar black/>
  <Jumbotron id='distopia' className='container-fluid'>
    <ConsoleText id="text3dsdasdasdasdas">La Distopia</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/good-city.jpg" role='presentation'/>
    <img className="col-md-6" src="images/distopia.jpg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#orwell'/>
  </Jumbotron>
  <Jumbotron id="orwell" className="content-wrapper">
    <ConsoleText id="tidsdassddstle10">1984</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/big-brother.png" role='presentation'/>
    <img className="col-md-6" src="images/1984.jpeg" role='presentation'/>
  </Jumbotron>
</div>)

export default Origin
