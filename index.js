const axios = require('axios')
const _ = require('lodash')
const { format } = require('date-fns')

console.log(_.capitalize('hello from lodash'))
console.log(format(new Date(), 'dd/MM/yyyy'))
console.log('Axios version:', axios.VERSION)