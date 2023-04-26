import React from 'react'
import Logo from "../Assets/Blanco1.png";
import 'animate.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'




const Contacto = () => {
  return (
    <div className='content'>
           
    <div className="contact-wrapper">
        <h2 className='logo'>Contactanos</h2>
        <div className='contact-form'>
        <form action=''>
        <p>
            <label for="fullname">Nombre</label>
            <input type='text' name='fullname' id='fullname'></input>
        </p>
        <p>
            <label for="fullname">Email</label>
            <input type='email' name='email' id='email'></input>
        </p>
        <p className='block'>
            <label for="Asunto">Asunto</label>
            <input type='text' name='asunto' id='asunto'></input>
        </p>
        <p className='block'>
            <label for="Mensaje">Mensaje</label>
            <textarea className='mensaje'rows={3}></textarea>
        </p>
        <p className='block'>
            <button type='submit' >
                ENVIAR
            </button>
        </p>

        </form>
        </div>

        <div className='contact-info'>
        <div className='logo-container'>
            <img src= {Logo} alt=""/>
        </div>
            <ul>
            <li><FontAwesomeIcon icon={faPhone}/>+54 387 5127246</li>
            <li><FontAwesomeIcon icon={faLocationDot} /> La casa de tu hermano N°456 </li>
            <li><FontAwesomeIcon icon={faEnvelope} /> holahola@gmail.com </li> 
            </ul>
        </div>
      
    </div>
    </div>
  )
}

export default Contacto

