// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import Login from './Components/Login'


function App() {


  return (
    
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin ' element={<Login />} />
      <Route path='/signup' element={<SignIn />} />
      <Route path='/account' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App

