import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => {
  anecdotes.sort((a1, a2) => a2.votes - a1.votes)
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link className="link-info" to={`/anecdotes/${anecdote.id}`}>
              {anecdote.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
