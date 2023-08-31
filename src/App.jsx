import React from 'react'
import NavBar from './components/sections/NavBar'
import Footer from './components/sections/Footer'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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