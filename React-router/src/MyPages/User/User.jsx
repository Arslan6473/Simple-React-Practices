import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className=' flex justify-center items-center font-bold mx-auto'>
       <div>User : {userid}</div> 
    </div>
  )
}

export default User