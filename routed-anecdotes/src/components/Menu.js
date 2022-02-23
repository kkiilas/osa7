import React from 'react'
import {
  Link
} from 'react-router-dom'


const Menu = () => {
  // const match = useMatch('/anecdotes/:id')
  // const anecdote = match
  //   ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
  //   : null

  const padding = {
    paddingRight: 5
  }

  return (
    <>
      <div>
        <Link className='link-info' style={padding} to="/">Anecdotes</Link>
        <Link className='link-info' style={padding} to="/create">Create new</Link>
        <Link className='link-info' style={padding} to="/about">About</Link>
      </div>
      {/* <Notification notification={notification} />
      <Routes>
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew addNew={addNew}/>} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>
  )
}

export default Menu
