import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Nosotros from './Components/Nosotros';
import Trabajos from './Components/Trabajos';
import Contacto from './Components/Contacto';
import { Footer } from './Components/Footer';


function App () {
  return (
    <div className='App'>
    <Navbar/>
    <Home/>
    <Nosotros/>
    <Trabajos/>
    <Contacto/>
    <Footer/>
    </div>
  )
}

export default App
