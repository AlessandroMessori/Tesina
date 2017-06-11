import React from 'react'
import {withRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'

import Transition from '../../Widgets/Transition/index'
import Origin from '../Origin'
import Home from '../Home/index'
import NotFound from '../NotFound/index'

const elem = (loaded, component) => () => <Transition loaded={loaded} component={component}/>

const Routes = ({history, loaded, onChange}) => {

  history.listen((location) => {
    if (location.pathname === '/') document.body.style.overflowY = 'hidden'
    else window.setTimeout(() => document.body.style.overflowY = 'scroll', 2000)

    if (!loaded) onChange()
  })

  return (<div>
    {<Switch>
      <Route component={elem(loaded, <Home/>)} exact path={'/'}/>
      <Route component={elem(loaded, <Origin/>)} exact path={'/origine'}/>
      <Route component={NotFound}/>
    </Switch>
    }
  </div>)

}

export default withRouter(Routes)
