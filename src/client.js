import axios from 'axios'

const url = process.env.URL || 'http://localhost:9000'
export async function loginUser (login) {
  return axios.get(`${url}/login`, login)
}

export async function getMovies () {
  return axios.get(`${url}/movies`)
}
