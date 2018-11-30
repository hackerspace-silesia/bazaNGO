import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from '../'

const Main = ({children}) =>
  <div>
    <Header />
    {children}
    <Footer />
  </div>

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
