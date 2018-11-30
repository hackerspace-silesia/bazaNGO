import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.css'

const Message = ({text = 'Ładowanie…', element = 'p', alt = false}) => {
  const Element = element
  const classes = classNames(
    styles.loader,
    alt ? styles.alt : ''
  )

  return (
    <Element className={classes}>
      {text}
    </Element>
  )
}

Message.propTypes = {
  text: PropTypes.string,
  element: PropTypes.node,
  alt: PropTypes.bool
}

export default Message
