import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../'
import styles from './styles.css'

const DefaultType = ({name, value}) =>
  <span>
    <strong>{name + ': '}</strong>
    {value}
  </span>

const LinkType = ({name, value}) =>
  <strong>
    <a href={value} title={value} target={'_blank'}>{name}</a>
  </strong>

const EmailType = ({name, value}) =>
  <span>
    <strong>{name + ': '}</strong>
    <a href={'mailto:' + value} title={value} >{value}</a>
  </span>

const OrganizationItem = ({name, value, icon, type = 'default'}) => {
  return (
    <If condition={value}>
      <span className={styles.item}>
        <If condition={icon}>
          <Icon name={icon} />
          {' '}
        </If>
        <Choose>
          <When condition={ type === 'link' }>
            <LinkType name={name} value={value} />
          </When>
          <When condition={ type === 'email' }>
            <EmailType name={name} value={value} />
          </When>
          <Otherwise>
            <DefaultType name={name} value={value} />
          </Otherwise>
        </Choose>
      </span>
    </If>
  )
}

OrganizationItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  icon: PropTypes.string,
  type: PropTypes.string
}

DefaultType.propTypes = LinkType.propTypes = EmailType.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ])
}

export default OrganizationItem
