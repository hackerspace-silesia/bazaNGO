import upperFirst from 'lodash/upperFirst'
import { POSITIONS_ORDER } from './constants'

const range = range => Array.from({length: range}, (_, index) => index + 1)

const normalizeText = text =>
  text.split('. ').map(sentence => upperFirst(sentence.toLowerCase())).join('. ')

const positionIndex = (position) =>
  POSITIONS_ORDER.findIndex(test => position.toLowerCase().includes(test.toLowerCase()))

const sortByPosition = (array) =>
  array.sort((a, b) => positionIndex(a.position) - positionIndex(b.position))

const joinStrings = (a, b, separator = ', ') => [a, b].join(a && b ? separator : '')

export {
  range,
  normalizeText,
  sortByPosition,
  joinStrings
}
