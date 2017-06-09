import React from 'react'
import {Route, Switch} from 'react-router'

import Transition from '../Transition'
import Home from '../Home'
import NotFound from '../NotFound'

const elem = (loaded, component) => () => <Transition loaded={loaded} component={component}/>

const Routes = (props) =>
  (<div>
    {<Switch>
      <Route component={elem(props.loaded, <Home/>)} exact path={'/'}/>
      <Route component={NotFound}/>
    </Switch>
    }
  </div>)

export default Routes
