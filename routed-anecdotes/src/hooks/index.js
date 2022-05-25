import { useState } from 'react'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => setValue('')

  const className = 'bg-dark text-light border-info ms-1 mb-1'

  return {
    type,
    value,
    onChange,
    reset,
    className
  }
}
