import { useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Courses from './Components/Courses'
import Signup from './Components/Signup'

function App() {

  return (
    <>
      <div className=' dark:bg-slate-700 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Signup' element={<Signup />} />


        </Routes>
      </div >
    </>
  )
}

export default App
