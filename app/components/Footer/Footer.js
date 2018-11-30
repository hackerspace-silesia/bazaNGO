import React from 'react'
import styles from './styles.css'
import { GITHUB_URL } from '../../constants'

const Footer = () =>
  <div className={styles.footer}>
    <p>
      {'Made with '}
      <i className="fa fa-heart" aria-label="<3" />
      {' at HackSilesia 2017'}
    </p>
    <p>
      <a href={GITHUB_URL}>{'Fork us on GitHub'}</a>
    </p>
  </div>

export default Footer
