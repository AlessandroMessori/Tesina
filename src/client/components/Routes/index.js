import React from 'react'
import {Route, Switch} from 'react-router'

import Home from '../Home'
import NotFound from '../NotFound'


const Routes = () =>
  (<div>
    <Switch>
      <Route component={Home} exact path={'/'}/>
      <Route component={NotFound}/>
    </Switch>
  </div>)

export default Routes
