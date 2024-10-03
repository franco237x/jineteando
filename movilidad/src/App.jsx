import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import Bikes from './Pages/Bikes'

function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
