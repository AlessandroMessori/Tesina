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
    <h2>Come With me if you want to live</h2>
    <img className="col-md-6" src="images/android.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/terminator.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn1' target='#matrix'/>
  </Jumbotron>
  <Jumbotron id='matrix' className='container-fluid content-wrapper'>
    <ConsoleText id="text2">The Matrix</ConsoleText>
    <h2>Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is? A virus. Human beings are a disease, a cancer of this planet. You're a plague and we are the cure.</h2>
    <img className="col-md-6" src="images/numbers.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/matrix.jpeg" role='presentation'/>
    <ScrollBtn id='scrollBtn3' target='#inTime'/>
  </Jumbotron>
  <Jumbotron id='inTime' className='container-fluid content-wrapper'>
    <ConsoleText id="text3">In Time</ConsoleText>
    <h2>You really don't know, do you? Everyone can't live forever. Where would we put them? Why do you think there are time zones? Why do you think taxes and prices go up the same day in the ghetto? The cost of living keeps rising to make sure people keep dying. How else could there be men with a million years while most live day to day? But the truth is... there's more than enough. No one has to die before their time. If you had as much time as I have on that clock, what would you do with it?
    </h2>
    <img className="col-md-6" src="images/intime.jpeg" role='presentation'/>
    <img className="col-md-6" src="images/clock.jpg" role='presentation'/>
  </Jumbotron>
</div>)

export default Cinema
