import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'

import { Home, Main } from 'components'

const createRoutes = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>
)

export default createRoutes
