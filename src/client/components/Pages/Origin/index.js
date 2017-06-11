import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Origin = (props) => (<div className='origin-section container-fluid'>
  <NavBar black/>
  <Jumbotron>
    <h1>L'utopia</h1>
    <h2> Una mappa del mondo che non include Utopia non è degna nemmeno di uno sguardo, perché non contempla il solo
      paese al quale l’umanità approda di continuo. E quando vi approda, l’umanità si guarda intorno, vede un paese
      migliore e issa nuovamente le vele.</h2>
    <h3>"Oscar Wilde, L'anima dell'uomo sotto il socialismo, 1891"</h3>
    <ScrollBtn id='scrollBtn1' target='#moore'/>
  </Jumbotron>
  <Jumbotron id='moore'>
    <h1>Origine Del Termine</h1>
    <h2>L'Utopìa è un romanzo di Tommaso Moro pubblicato nel 1516, in cui è descritto il viaggio immaginario di Raffaele
      Itlodeo in una fittizia isola-regno, abitata da una società ideale.</h2>
    <img className="col-md-8 col-md-push-2" src="images/utopia.jpeg"/>
  </Jumbotron>
</div>)

export default Origin
