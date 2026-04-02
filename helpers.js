// Helper functions using lodash
const _ = require('lodash')

const capitalizeWords = (str) => {
  return str.split(' ').map(word => _.capitalize(word)).join(' ')
}

const getUniqueItems = (arr) => {
  return _.uniq(arr)
}

const flattenArray = (arr) => {
  return _.flatten(arr)
}

console.log(capitalizeWords('hello world from golu'))
console.log(getUniqueItems([1, 2, 2, 3, 3, 4]))
console.log(flattenArray([[1, 2], [3, 4], [5, 6]]))
