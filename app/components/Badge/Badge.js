import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from '../'
import styles from './styles.css'

const Badge = ({text, ...rest}) =>
  <Tag name={text} className={styles.badge} {...rest} />

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default Badge
