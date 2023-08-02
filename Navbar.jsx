// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='p-4 flex items-center justify-between z-[100] absolute w-full'>
      <Link to='/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      
      <div>
        <Link to='/signup'><button className="text-white mx-5">Sign Up</button></Link>
        
        <Link to='/signin'><button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">Sign In </button></Link>
        
      </div>
    </div>
  )
}

export default Navbar
