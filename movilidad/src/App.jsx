import { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'
import Banner from './Components/Banner'
import Cards from './Components/Card'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Menu/>
      <div className="container">
        {/*<Banner/>*/}
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
