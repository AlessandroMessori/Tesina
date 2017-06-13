import React from 'react'
import {withRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'

import Transition from '../../Widgets/Transition/'
import Home from '../Home/'
import Origin from '../Origin'
import Literature from '../Literature'
import Cinema from '../Cinema'
import NotFound from '../NotFound/'

const elem = (loaded, component) => () => <Transition loaded={loaded} component={component}/>

const Routes = ({history, loaded, onChange}) => {

  history.listen(() => {
    if (!loaded) onChange()
  })

  return (<div>
    {<Switch>
      <Route component={elem(loaded, <Home/>)} exact path={'/'}/>
      <Route component={elem(loaded, <Origin/>)} exact path={'/origine'}/>
      <Route component={elem(loaded, <Literature/>)} exact path={'/letteratura'}/>
      <Route component={elem(loaded, <Cinema/>)} exact path={'/cinema'}/>
      <Route component={NotFound}/>
    </Switch>
    }
  </div>)

}

export default withRouter(Routes)
