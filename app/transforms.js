import { normalizeText } from './helpers'

const transformPerson = (person) => ({
  id: person.id,
  name: person.full_name,
  position: person.position
})

const transformOrganization = data => ({
  id: data.id,
  name: data.name,
  shortName: data.short_name,
  purpose: data.profile.purpose || normalizeText(data.purpose),
  active: Boolean(data.is_active),
  info: {
    nip: data.nip && data.nip !== '0' ? data.nip : null,
    krs: data.krs || null,
    active: Boolean(data.is_active),
    registered: data.register_at
  },
  address: {
    country: data.country,
    city: data.city || 'Katowice',
    postalCode: data.postal_code,
    street: data.street,
    streetNumber: data.street_number,
    flatNumber: data.flat_number
  },
  contact: {
    email: data.profile.email,
    facebook: data.profile.facebook,
    phone: data.profile.phone_number,
    website: data.profile.www
  },
  location: {
    latitude: data.profile.latitude,
    longitude: data.profile.longitude
  },
  category: data.categories[0] || {},
  tags: data.tags,
  people: data.administration.map(transformPerson)
})

const transformProposal = (data) => ({
  organization: data.id,
  name: data.name,
  purpose: data.purpose,
  email: data.contact.email,
  phone_number: data.contact.phone,
  www: data.contact.website,
  facebook: data.contact.facebook,
  longitude: null,
  latitude: null
})

export {
  transformOrganization,
  transformProposal
}
