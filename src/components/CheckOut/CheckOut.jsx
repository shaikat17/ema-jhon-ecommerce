import React from 'react'
import { useGlobalContext } from '../../Context'

const CheckOut = () => {
  const {user} = useGlobalContext()
  console.log(user)
  return (
    <div>{user.email}</div>
  )
}

export default CheckOut