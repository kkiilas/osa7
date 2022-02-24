import React from 'react'
import {
  Link
} from 'react-router-dom'


const Menu = () => {
  const padding = {
    paddingRight: 5
  }

  return (
    <div>
      <Link className='link-info' style={padding} to="/">Anecdotes</Link>
      <Link className='link-info' style={padding} to="/create">Create new</Link>
      <Link className='link-info' style={padding} to="/about">About</Link>
    </div>
  )
}

export default Menu
