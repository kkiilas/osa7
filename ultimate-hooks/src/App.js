import React from 'react'
import { useField, useResource } from './hooks/index'

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value })
  }

  return (
    <div className='container text-light'>
      <h2>Notes</h2>
      <form onSubmit={handleNoteSubmit} className='mb-1'>
        <input {...content} />
        <button className='btn btn-warning ms-1'>Create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>People</h2>
      <form onSubmit={handlePersonSubmit}>
        Name: <input {...name} /> <br />
        Number: <input {...number} />
        <button className='btn btn-warning ms-1'>Create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App
