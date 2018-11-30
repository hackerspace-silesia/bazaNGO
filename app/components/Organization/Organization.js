import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getOrganization } from '../../api'
import { sortByPosition, joinStrings } from '../../helpers'
import { OrganizationItem as Item, Message, Tag } from '../'
import styles from './styles.css'

class Organization extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  constructor() {
    super()

    this.state = {
      isLoading: true,
      organization: {}
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const id = this.props.match.params.id
    this.setState({ isLoading: true }, () =>
      getOrganization(id).then((organization) =>
        this.setState({
          organization,
          isLoading: false
        })
      )
    )
  }

  renderDescription(organization) {
    return (
      <div className={styles.main}>
        <p className={styles.purpose}>
          {organization.purpose}
        </p>
      </div>
    )
  }

  renderInfo(info) {
    const { nip, krs, registered, active } = info

    const activeIndicator = active
      ? <span className={styles.active}>{'Aktywna'}</span>
      : <span className={styles.inactive}>{'Nieaktywna'}</span>

    return (
      <If condition={ nip || krs || registered }>
        <div className={styles.block}>
          <h3>{'Informacje'}</h3>
          <Item name={'Status'} value={ activeIndicator } />
          <Item name={'Zarejestrowana'} value={registered} />
          <Item name={'NIP'} value={nip} />
          <Item name={'KRS'} value={krs} />
        </div>
      </If>
    )
  }

  renderContact(contact) {
    const { phone, email, website, facebook } = contact

    return (
      <If condition={ phone || email || website || facebook}>
        <div className={styles.block}>
          <h3>{'Kontakt'}</h3>
          <Item name={'Telefon'} value={phone}
            icon={'phone'} />
          <Item name={'Email'} value={email}
            type={'email'} icon={'envelope-o'} />
          <Item name={'Strona internetowa'} value={website}
            type={'link'} icon={'external-link'} />
          <Item name={'Facebook'} value={facebook}
            type={'link'} icon={'facebook-official'} />
        </div>
      </If>
    )
  }

  renderAddress(address) {
    const { city, postalCode, street, streetNumber, flatNumber } = address

    return (
      <If condition={postalCode && street}>
        <div className={styles.block}>
          <h3>{'Adres'}</h3>
          <p>
            {street} {joinStrings(streetNumber, flatNumber, '/')}<br />
            {joinStrings(postalCode, city)}
          </p>
        </div>
      </If>
    )
  }

  renderPeople(people) {
    const sortedPeople = sortByPosition(people)

    return (
      <If condition={people.length}>
        <div className={styles.block}>
          <h3>{'Osoby'}</h3>
          {sortedPeople.map(({id, name, position}) => (
            <div key={id}>
              <span className={styles.person}>
                {name}
              </span>
              <span className={styles.position}>
                {position}
              </span>
            </div>
          ))}
        </div>
      </If>
    )
  }

  renderTags(tags) {
    return (
      <If condition={tags.length}>
        <div className={styles.block}>
          <h3>{'Tagi'}</h3>
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </If>
    )
  }

  render() {
    const { isLoading, organization } = this.state
    const { id, name, info, contact, address, people, category, tags } = organization

    return (
      isLoading
        ? <Message text={'Ładowanie…'} />
        : <section className={styles.container}>
          <aside className={styles.category}>
            {category.name ? 'Kategoria: ' + category.name : 'Organizacja pozarządowa'}
          </aside>
          <h2 className={styles.header}>{name}</h2>
          <article className={styles.columns}>
            {this.renderDescription(organization)}
            <aside className={styles.aside}>
              <div className={styles.edit}>
                <Link to={`/organization/${id}/edit`}>
                  {'Edytuj dane'}
                </Link>
              </div>
              {this.renderInfo(info)}
              {this.renderContact(contact)}
              {this.renderAddress(address)}
              {this.renderPeople(people)}
              {this.renderTags(tags)}
            </aside>
          </article>
        </section>
    )
  }
}

export default Organization
