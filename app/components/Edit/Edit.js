import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getOrganization, postProposal } from '../../api'
import styles from './styles.css'

const TextInput = (props) => <input type='text' className={styles.input} {...props} />

class Edit extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor() {
    super()

    this.state = {
      isLoading: true,
      organization: {}
    }

    this.fetchData = this.fetchData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.handleNameChange = this.handleChange.bind(this, null, 'name')
    this.handlePurposeChange = this.handleChange.bind(this, null, 'purpose')
    this.handleEmailChange = this.handleChange.bind(this, 'contact', 'email')
    this.handlePhoneChange = this.handleChange.bind(this, 'contact', 'phone')
    this.handleWebsiteChange = this.handleChange.bind(this, 'contact', 'website')
    this.handleFacebookChange = this.handleChange.bind(this, 'contact', 'facebook')
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const id = this.props.match.params.id

    this.setState({ isLoading: true }, () => {
      getOrganization(id).then((organization) => {
        return this.setState({
          organization,
          isLoading: false
        })
      })
    })
  }

  handleChange(group, field, event) {
    const { organization } = this.state
    const { value } = event.target

    const newOrganization = group
      ? {...organization, [group]: {...organization[group], [field]: value}}
      : {...organization, [field]: value}

    this.setState({ organization: newOrganization })
  }

  handleSubmit() {
    const { history } = this.props
    const { organization: data } = this.state

    postProposal(data)
      .then(() => history.push(`/organization/${data.id}`))
      .catch(() => null) // TODO
  }

  render() {
    const { isLoading, organization } = this.state
    const { name, purpose, contact } = organization

    return (
      isLoading
        ? null
        : <div className={styles.container}>
          <form onSubmit={this.handleSubmit}>
            <TextInput placeholder={'Nazwa organizacji'} value={name} onChange={this.handleNameChange} />
            <textarea placeholder={'Cele organizacji'} value={purpose} onChange={this.handlePurposeChange} className={styles.purpose} />
            <TextInput placeholder={'Email'} value={contact.email} onChange={this.handleEmailChange} />
            <TextInput placeholder={'Telefon'} value={contact.phone} onChange={this.handlePhoneChange} />
            <TextInput placeholder={'Strona internetowa'} value={contact.website} onChange={this.handleWebsiteChange} />
            <TextInput placeholder={'Facebook'} value={contact.facebook} onChange={this.handleFacebookChange} />
            <input type='submit' value='Wyślij' className={styles.submit} />
          </form>
        </div>
    )
  }
}

export default Edit
