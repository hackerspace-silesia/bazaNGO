import React from 'react'
import propTypes from 'prop-types'
import { Tag } from '../'
import styles from './styles.css'

const Tags = ({tags, activeTags, onTagClick}) =>
  <div className={styles.tags}>
    {
      tags.map(({id, name, active}) =>
        <Tag
          key={id}
          name={name}
          active={activeTags.includes(id)}
          onClick={() => onTagClick(id)}
        />
      )
    }
  </div>

Tags.propTypes = {
  tags: propTypes.array.isRequired,
  activeTags: propTypes.array.isRequired,
  onTagClick: propTypes.func.isRequired
}

export default Tags
