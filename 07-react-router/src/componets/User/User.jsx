import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-500 text-black text-center text-2xl'>User: <span className='font-bold'>{id}</span></div>
  )
}

export default User