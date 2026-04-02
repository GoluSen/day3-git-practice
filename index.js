const axios = require('axios')
const _ = require('lodash')
const { format } = require('date-fns')

console.log(_.capitalize('hello from lodash'))
console.log(format(new Date(), 'dd/MM/yyyy'))
console.log('Axios version:', axios.VERSION)

// Array methods practice
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(n => n * 2)
console.log('Doubled:', doubled)

const evens = numbers.filter(n => n % 2 === 0)
console.log('Evens:', evens)

const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log('Sum:', sum)