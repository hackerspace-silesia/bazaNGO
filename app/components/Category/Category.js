import React from 'react'
import propTypes from 'prop-types'

const Category = ({id = '', name}) =>
  <option value={id}>{name}</option>

Category.propTypes = {
  id: propTypes.number,
  name: propTypes.string.isRequired
}

export default Category
