import axios from 'axios'
const Api = axios.create({baseURL:'https://api.github.com/repos/'})

export default Api