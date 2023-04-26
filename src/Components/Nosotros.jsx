import React from 'react'
import Autoimage from '../Assets/joey.jpg'



const Nosotros = () => {
  return (
  <div className='nosotros'>
   <div className='separador'>
    <div className='card-nos'></div>
    <div className='card-nos'></div>
    <div className='text-we-container'>
      <h2 className='text-we'> Somos una empresa re piola conocenos</h2>
      <h3 className='text-we'>Tenemos una paginita somos re serios</h3>
      <h3 className='text-we'>etc etc etc etc etc etc etc etc etc etc</h3>
    </div>
   </div>
   <div className="wrapper">
      <figure className="cardi">
        <img className='img'
          src={Autoimage}
          width="640"
          height="640"
          alt=""
        />
        <figcaption>
          <blockquote>
            Arreglamos autos y hacemos algunas cositas somos mecanicos.
          </blockquote>
          <cite
            >Pipipipi lalalala bububub etc aiudaaaaaaa.</cite
          >
    
        </figcaption>
      </figure>
    </div>
  </div>
  
  )
}

export default Nosotros