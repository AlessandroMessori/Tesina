import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Routes from '../Routes/index'
import './index.scss'


class App extends React.Component {

  constructor() {
    super()

    this.state = {
      loaded: false
    }

    this.updateState = this.updateState.bind(this)
    createHistory()
  }

  componentDidMount() {
    document.body.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
      alert('success!');
      return false;
    }, false);
    this.updateState()
  }

  updateState() {
    this.setState({loaded: false},
      () => window.setTimeout(() => this.setState({loaded: true}), 2000))
  }

  render() {
    return (
      <Router history={createHistory()}>
        <Routes loaded={this.state.loaded} onChange={this.updateState}/>
      </Router>
    )
  }


}

export default App
