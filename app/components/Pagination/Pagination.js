import React from 'react'
import PropTypes from 'prop-types'
import { PaginationItem } from '../'
import { range } from '../../helpers'
import styles from './styles.css'

const Pagination = ({pages, currentPage, onClick}) =>
  <div className={styles.pagination}>
    {
      range(pages).map(page =>
        <PaginationItem
          key={page}
          page={page}
          active={page === currentPage}
          onClick={onClick}
        />
      )
    }
  </div>

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Pagination
