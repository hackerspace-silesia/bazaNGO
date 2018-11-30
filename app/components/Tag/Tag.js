import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import noop from 'lodash/noop'
import styles from './styles.css'

const sizes = {
  default: '',
  big: styles.big,
  small: styles.small
}

const variants = {
  default: '',
  warning: styles.warning,
  success: styles.success
}

const Tag = ({
  name,
  size = 'default',
  variant = 'default',
  active = false,
  className = '',
  onClick
}) => {
  const classes = classNames(
    styles.tag,
    sizes[size] || '',
    variants[variant] || '',
    active ? styles.active : '',
    onClick ? styles.clickable : '',
    className
  )

  return (
    <span onClick={onClick || noop} className={classes}>
      {name}
    </span>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Tag
