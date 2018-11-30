import React from 'react'
import propTypes from 'prop-types'
import { Category } from '../'
import styles from './styles.css'

const Categories = ({categories, category, onCategoryChange}) =>
  <div className={styles.categories}>
    <select
      name='select'
      className={styles.categoriesSelect}
      onChange={onCategoryChange}
      value={category}
    >
      {[
        <Category key={''} name='Wszystkie kategorie' />,
        ...categories.map(({id, name}) =>
          <Category key={id} id={id} name={name} />
        )
      ]}
    </select>
  </div>

Categories.propTypes = {
  categories: propTypes.array.isRequired,
  category: propTypes.string.isRequired,
  onCategoryChange: propTypes.func.isRequired
}

export default Categories
