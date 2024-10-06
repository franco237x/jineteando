import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import Bikes from './Pages/Bikes'
import NotFound from './Pages/NotFound'
import Perfil from './Pages/Perfil'

function App() {

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
