// Async/Await practice with axios
const axios = require('axios')

const getUser = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log('User name:', response.data.name)
    console.log('User email:', response.data.email)
    console.log('User city:', response.data.address.city)
  } catch (error) {
    console.log('Error:', error.message)
  }
}

getUser()


// Multiple API calls
const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
    response.data.forEach(post => {
      console.log('Post title:', post.title)
    })
  } catch (error) {
    console.log('Error:', error.message)
  }
}

getPosts()
