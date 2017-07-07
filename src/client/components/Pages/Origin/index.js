import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import NavBar from '../../Widgets/NavBar'
import ConsoleText from '../../Widgets/ConsoleText'
import './index.scss'

const Origin = (props) => (<div className='origin-section container-fluid'>
  <NavBar black/>
  <Jumbotron id='moore' className='container-fluid'>
    <ConsoleText id="textuiyrtotreuio2">Utopia</ConsoleText>
    <hr/>
    <img className="col-md-6" src="images/moore.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/utopia.jpeg" role='presentation'/>
  </Jumbotron>
</div>)

export default Origin
