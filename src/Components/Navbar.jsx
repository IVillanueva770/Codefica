import React, { useState } from "react";
import Logo from "../Assets/logo-forani-dorado.png";


const Navbar = () => {
const [isOpen, setIsOpen]=useState(false)

    
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src= {Logo} alt=""/>
        </div>
      <div className={`navbar-links-container ${isOpen && "open"}`}>
            <a href=''className="link-nav">Home</a>
            <a href=''className="link-nav">Nosotros</a>
            <a href=''className="link-nav">Trabajo</a>
            <a href=''className="link-nav">Contacto</a>
        </div>
        <div className={`toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
        <span className="span-nav"></span>
        <span className="span-nav"></span>
        <span className="span-nav"></span>

        <body className={isOpen ? 'overlay' : ''}></body>
        </div>
    </nav>
  )
}

export default Navbar;