import React from 'react'

const Anecdote = ({ anecdote, vote }) => {
  const handleVote = (event) => {
    event.preventDefault()
    vote(anecdote.id)
  }

  return (
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <p>has {anecdote.votes} votes {' '}
        <button
          className='btn btn-info'
          onClick={handleVote}>
          Vote
        </button>
      </p>
      <p>For more info, see {' '}
        <a className='link-info' href={anecdote.info}>
          {anecdote.info}
        </a>
      </p>
    </div>
  )
}

export default Anecdote
