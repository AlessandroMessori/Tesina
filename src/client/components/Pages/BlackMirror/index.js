import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import ConsoleText from '../../Widgets/ConsoleText'
import NavBar from '../../Widgets/NavBar'
import Video from '../../Widgets/Video'
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
        <ConsoleText id="titledsas10">Gioci Pericolosi</ConsoleText>
        <hr/>
        <Video type="mp4" src="images/bm1.mp4"/>
        <ScrollBtn id='scrollBtn1' target='#white'/>
      </Jumbotron>
      <Jumbotron id='white' className='content-wrapper container-fluid'>
        <ConsoleText id="titlasdsadse1ds0">Bianco Natale</ConsoleText>
        <hr/>
        <Video src="images/Black-Mirror-Intro.mp4"/>
        <ScrollBtn id='scrollBtn2' target='#falling'/>
      </Jumbotron>
      <Jumbotron id='falling' className='content-wrapper container-fluid'>
        <ConsoleText id="titlasdsdsadfe10">Caduta Libera</ConsoleText>
        <hr/>
        <Video src="images/bm2.mp4"/>
      </Jumbotron>
    </div>)
  }


}

export default BlackMirror
