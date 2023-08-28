import React from 'react'
import NavBar from './components/sections/NavBar'
import Footer from './components/sections/Footer'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App