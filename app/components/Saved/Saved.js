import React from 'react'
import PropTypes from 'prop-types'
import { banner } from './styles.css'
import { Organization } from '../'

const Saved = ({match}) =>
  <div>
    <div className={banner}>
      <i className="fa fa-check-circle" aria-hidden="true" />
      {' Zapisano! Zmiany pojawią się po zaakceptowaniu przez administratora!'}
    </div>
    <Organization match={match} disableEdit={true} />
  </div>

Saved.propTypes = {
  match: PropTypes.object
}

export default Saved
