import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import Routes from './components/Routes'
import './assets/styles/index.scss'

ReactDOM.render(
  <Router history={createHistory()}>
    <Routes/>
  </Router>,
  document.getElementById('root'))

