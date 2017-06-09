import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import Routes from './components/Routes'
import './assets/styles/index.scss'

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


ReactDOM.render(<App/>, document.getElementById('root'))

