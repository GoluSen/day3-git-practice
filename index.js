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


// Object practice
const person = {
  name: 'Golu',
  age: 21,
  city: 'Vidisha'
}
console.log('Name:', person.name)
console.log('Keys:', Object.keys(person))
console.log('Values:', Object.values(person))


// String methods practice
const str = 'hello world from git practice'
console.log('Uppercase:', str.toUpperCase())
console.log('Split:', str.split(' '))
console.log('Includes git:', str.includes('git'))
console.log('Replace:', str.replace('hello', 'hi'))


// Date practice using date-fns
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
console.log('Tomorrow:', format(tomorrow, 'dd/MM/yyyy'))

const nextWeek = new Date()
nextWeek.setDate(nextWeek.getDate() + 7)
console.log('Next week:', format(nextWeek, 'dd/MM/yyyy'))


// Lodash practice
const users = [
  { name: 'Golu', age: 21 },
  { name: 'Raj', age: 25 },
  { name: 'Priya', age: 19 }
]
const sorted = _.sortBy(users, 'age')
console.log('Sorted by age:', sorted)

const names = _.map(users, 'name')
console.log('Names:', names)
