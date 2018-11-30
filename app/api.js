import queryString from 'query-string'
import { transformOrganization, transformProposal } from './transforms'

const BASE_URL = 'https://bazango.herokuapp.com/api/'

const config = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

const get = (path) =>
  fetch(BASE_URL + path, { method: 'GET', ...config })
    .then(response => response.json())

const post = (path, data) =>
  fetch(BASE_URL + path, { method: 'POST', body: JSON.stringify(data), ...config })
    .then(response => response.json())

const getOrganizations = (page, {category, activeTags, search}) => {
  let query = queryString.stringify({
    search,
    page,
    'tags__name__in': activeTags.join(','),
    'categories__name__in': category
  })
  return get('organization/?' + query)
}

const getOrganization = (id) =>
  get(`organization/${id}/`).then(transformOrganization)

const getTags = () => get('tag/')

const getCategories = () => get('category/')

const postProposal = (data) => post('organization-proposal/', transformProposal(data))

export {
  getOrganizations,
  getOrganization,
  getTags,
  getCategories,
  postProposal
}
