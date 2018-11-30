import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({name, label}) =>
  label
    ? <i className={'fa fa-' + name} aria-hidden={true} />
    : <i className={'fa fa-' + name} aria-label={label} />

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default Icon
