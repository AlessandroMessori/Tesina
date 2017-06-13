import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import ConsoleText from '../../Widgets/ConsoleText'
import NavBar from '../../Widgets/NavBar'
import HeroVideo from '../../Widgets/HeroVideo'
import ScrollBtn from '../../Widgets/ScrollBtn'
import './index.scss'

class BlackMirror extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      videoEnded: false
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({videoEnded: true})
  }

  render() {

    if (!this.state.videoEnded) return (<HeroVideo onEnd={this.updateState}/>)

    return (<div className='blackMirror-section container-fluid'>
      <NavBar black/>
      <Jumbotron id="1984" className="content-wrapper">
        <ConsoleText id="title10">Black Mirror</ConsoleText>
        <hr/>
        <h2>“War is peace. Freedom is slavery. Ignorance is strength.”</h2>
        <img className="col-md-6" src="images/big-brother.png" role='presentation'/>
        <img className="col-md-6" src="images/1984.jpeg" role='presentation'/>
        <ScrollBtn id='scrollBtn1' target='#fahrenheit'/>
      </Jumbotron>
      <Jumbotron id='fahrenheit' className='content-wrapper container-fluid'>
        <ConsoleText id="title1ds0">Fahrenheit 451</ConsoleText>
        <h2>“If you hide your ignorance, no one will hit you and you'll never learn.”</h2>
        <img className="col-md-6" src="images/fireman.jpeg" role='presentation'/>
        <img className="col-md-6" src="images/library.jpeg" role='presentation'/>
        <ScrollBtn id='scrollBtn3' target='#new-world'/>
      </Jumbotron>
      <Jumbotron id='new-world' className='content-wrapper container-fluid'>
        <ConsoleText id="titldfe10">Il Mondo Nuovo</ConsoleText>
        <h2>“If one's different, one's bound to be lonely.”</h2>
        <img className="col-md-6" src="images/new-world.jpeg" role='presentation'/>
        <img className="col-md-6" src="images/babies.jpeg" role='presentation'/>
      </Jumbotron>
    </div>)
  }


}

export default BlackMirror
