import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu'
import Home from './Pages/Home'
import Bikes from './Pages/Bikes'
import NotFound from './Pages/NotFound'
import Perfil from './Pages/Perfil'
import Helpme from './Pages/Helpme'
import Auth0 from '../Index'

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
          <Route path="/Helpme" element={<Helpme />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
