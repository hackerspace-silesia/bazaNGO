import ReactDOM from 'react-dom'
import createHistory from 'history/createHashHistory'

import configureStore from 'store'
import createRoutes from 'routes'
import styles from 'styles.css' // eslint-disable-line

const history = createHistory()
const store = configureStore(history)

const routes = createRoutes(store, history)

ReactDOM.render(routes, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('routes', () => {
    const createRoutes = require('routes').default
    const routes = createRoutes(store, history)

    ReactDOM.render(routes, document.getElementById('app'))
  })
}
