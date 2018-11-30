import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './styles.css'

const PaginationItem = ({page, active, onClick}) => {
  const classes = classNames(
    styles.paginationItem,
    active ? styles.active : ''
  )

  return (
    <span className={classes} onClick={() => onClick(page)}>
      {page}
    </span>
  )
}

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PaginationItem
