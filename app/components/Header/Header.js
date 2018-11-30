import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DEFAULT_HEADER_TEXT } from '../../constants'
import styles from './styles.css'

const Header = ({text = DEFAULT_HEADER_TEXT}) =>
  <div className={styles.header}>
    <h1 className={styles.text}>
      <Link to="/">
        {text}
      </Link>
    </h1>
  </div>

Header.propTypes = {
  text: PropTypes.string
}

export default Header
