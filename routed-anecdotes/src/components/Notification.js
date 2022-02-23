import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const display = {
    display: notification ? '' : 'none'
  }

  return (
    <div style={display}>
      {notification}
    </div>
  )
}

export default Notification
