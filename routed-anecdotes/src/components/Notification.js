import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    display: notification ? '' : 'none',
    paddingTop: 10,
    paddingLeft: 2,
    marginBottom: 5
  }

  return (
    <div style={style} className='border border-info border-1 rounded-3'>
      {notification}
    </div>
  )
}

export default Notification
