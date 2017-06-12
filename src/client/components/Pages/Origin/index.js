import React from 'react'
import {Jumbotron, PageHeader} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

const Origin = (props) => (<div className='origin-section container-fluid'>
  <NavBar black/>
  <Jumbotron>
    <PageHeader>utopia</PageHeader>
    <h2 id="quote"> Una mappa del mondo che non include Utopia non è degna nemmeno di uno sguardo, perché non contempla
      il solo paese al quale l’umanità approda di continuo. E quando vi approda, l’umanità si guarda intorno, vede un
      paese migliore e issa nuovamente le vele.</h2>
    <h3>"Oscar Wilde, L'anima dell'uomo sotto il socialismo, 1891"</h3>
    <ScrollBtn id='scrollBtn1' target='#moore'/>
  </Jumbotron>
  <Jumbotron id='moore' className='container-fluid'>
    <PageHeader>Origine Del Termine</PageHeader>
    <h2>L'Utopìa è un romanzo di Tommaso Moro pubblicato nel 1516, in cui è descritto il viaggio immaginario di Raffaele
      Itlodeo in una fittizia isola-regno, abitata da una società ideale.</h2>
    <img className="col-md-6" src="images/moore.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/utopia.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn3' target='#distopia'/>
  </Jumbotron>
  <Jumbotron id='distopia' className='container-fluid'>
    <PageHeader>La Nascita della Distopia</PageHeader>
    <h2>Per distopia s'intende la descrizione di una immaginaria società o comunità altamente indesiderabile o
      spaventosa. Il termine è stato coniato come contrario di utopia ed è soprattutto utilizzato in riferimento alla
      rappresentazione di una società fittizia (spesso ambientata nel futuro) nella quale alcune tendenze sociali,
      politiche e tecnologiche avvertite nel presente sono portate a estremi negativi
    </h2>
    <img className="col-md-6" src="images/good-city.jpg" role='presentation'/>
    <img className="col-md-6" src="images/distopia.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Origin
