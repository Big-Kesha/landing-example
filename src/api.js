import axios from "axios"

const API_URL = 'http://localhost:1337/api'

// const API_URL = 'https://big-kesha.github.io/landing-example-strapi/api'

export const axiosInstance = axios.create({
  baseURL: API_URL,
})

export const getHeroData = async () => {
  try{
    const response = await axiosInstance.get('/hero?populate=*')
    return response.data.data

  }catch(e){
    console.log(e)
  }
}
export const getCustomersList = async () => {
  try{
    const response = await axiosInstance.get('/customers/?populate=*')
    return response.data.data

  }catch(e){
    console.log(e)
  }
}