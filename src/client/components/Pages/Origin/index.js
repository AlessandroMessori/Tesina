import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ConsoleText from '../../Widgets/ConsoleText'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Origin = (props) => (<div className='origin-section container-fluid'>
  <NavBar black/>
  <Jumbotron>
    <ConsoleText id="text1">utopia</ConsoleText>
    <hr/>
    <h2 id="quote"> Una mappa del mondo che non include Utopia non è degna nemmeno di uno sguardo, perché non contempla
      il solo paese al quale l’umanità approda di continuo. E quando vi approda, l’umanità si guarda intorno, vede un
      paese migliore e issa nuovamente le vele.</h2>
    <h3>"Oscar Wilde, L'anima dell'uomo sotto il socialismo, 1891"</h3>
    <ScrollBtn id='scrollBtn1' target='#moore'/>
  </Jumbotron>
  <Jumbotron id='moore' className='container-fluid'>
    <ConsoleText id="text2">Origine Del Termine</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/moore.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/utopia.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn3' target='#distopia'/>
  </Jumbotron>
  <Jumbotron id='distopia' className='container-fluid'>
    <ConsoleText id="text3">La Distopia</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/good-city.jpg" role='presentation'/>
    <img className="col-md-6" src="images/distopia.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Origin
