import { useEffect, useState } from 'react'
import { getCountry } from '../services/country'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    (async () => {
      const country = await getCountry(name)
      setCountry(country[0])
    })()
  }, [name])

  return country
}
