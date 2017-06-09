import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Routes from '../Routes'
import './index.scss'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }

    window.setTimeout(() => this.setState({loaded: true}), 3000)
  }

  render() {
    return (
      <Router history={createHistory()}>
        <Routes loaded={this.state.loaded}/>
      </Router>
    )
  }


}

export default App
