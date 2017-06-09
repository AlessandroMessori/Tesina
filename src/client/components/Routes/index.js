import React from 'react'
import {Route, Switch} from 'react-router'

import Home from '../Home'
import NotFound from '../NotFound'
import Hive from '../Hive'


const elem = (loaded) => () => !loaded ? (<Hive/>) : <Home/>

const Routes = (props) =>
  (<div>
    {console.log(props.loaded)}
    {<Switch>
      <Route component={elem(props.loaded)} exact path={'/'}/>
      <Route component={Hive} path={'/loading'}/>
      <Route component={NotFound}/>
    </Switch>
    }
  </div>)

export default Routes
