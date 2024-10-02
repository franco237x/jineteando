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
        <div className="row">
          <Cards 
            titulo="Estacionamiento Medido" 
            texto="Inicia el servicio de estacionamiento medido para tu vehículo" 
            boton="Acceder"/>
            <Cards 
          titulo="Alquiler de Eco-Bicis" 
          texto="Encuentra la bicileta más cercana y comienza a usarla" 
          boton="Acceder"/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
