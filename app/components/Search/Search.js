import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const Search = (props) =>
  <input type='text' className={styles.search} {...props} />

Search.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search
