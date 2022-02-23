import axios from 'axios'

export const getCountry = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
  const response = await axios.get(url)
  return response.data
}
