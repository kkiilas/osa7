import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks/index'

const CreateNew = ({ addNew }) => {
  const navigate = useNavigate()
  const { reset: resetContent, ...content } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetInfo, ...info } = useField('url')

  const handleSubmit = (event) => {
    event.preventDefault()
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    navigate('/')
  }

  const handleClick = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  const float = {
    float: 'left'
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content:
          <input {...content} />
        </div>
        <div>
          Author:
          <input {...author} />
        </div>
        <div>
          Url for more info:
          <input {...info} />
        </div>
        <button className="btn btn-outline-info" style={float}>
          Create
        </button>
      </form>
      <button className="btn btn-outline-info ms-1" onClick={handleClick}>
        Reset
      </button>
    </div>
  )
}

export default CreateNew
