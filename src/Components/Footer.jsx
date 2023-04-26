import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-container'>
        <div className='footer-text'>
            <h2>FORANI</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Tempore dolorem obcaecati illo dolor maxime? <br></br>Consequatur alias quo neque labore deserunt earum. </p>

        </div>
        <div class="footer-link">
            <a href=""className="link-nav">Acerca de</a>
            <a href=""className="link-nav">Trabajos</a>
            <a href=""className="link-nav">Instagram</a>
        </div>
        <div class="footer-link-2">
            <a href="#"className="link-nav">Mail</a>
            <a href="#"className="link-nav">Ubicación</a>
        </div>
        </div>
       

    <div class="linea">   
        <p className='code'>CodeFICA DEV © 2023</p>
    </div>
    </div>

  
  )
}
