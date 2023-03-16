import axios from 'axios'

//const BASE_URL ='https://sami-ecommerce.herokuapp.com/api'
const BASE_URL = "http://localhost:5000/api";

export const userRequest= axios.create({
    baseURL:BASE_URL
})
