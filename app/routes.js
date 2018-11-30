import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Switch, Route } from 'react-router-dom'

import { Organizations, Main, Organization, Upload, Edit, Saved } from './components'

const createRoutes = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      <Main>
        <Switch>
          <Route path='/organization/:id/edit' component={Edit} />
          <Route path='/organization/:id/saved' component={Saved} />
          <Route path='/organization/:id' component={Organization} />
          <Route path='/upload' component={Upload} />
          <Route path='/' component={Organizations} />
        </Switch>
      </Main>
    </Router>
  </Provider>
)

export default createRoutes
