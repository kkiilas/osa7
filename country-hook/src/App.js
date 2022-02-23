import React, { useState } from 'react'
import { useCountry, useField } from './hooks/index'
import Country from './components/Country'

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (event) => {
    event.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div className='container text-light'>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button className='btn btn-warning'>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
