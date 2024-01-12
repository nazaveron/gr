import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='photo-container'>
        <div className='photo photo-1'>
          <h2>Aprender a convivir con la falta</h2>
          <p>La castración se define como "la falta en lo simbólico de un objeto imaginario"...</p>
        </div>
        <div className='photo photo-2'>
          <h2>Es ahora donde estas construyendo</h2>
          <p>Hay gente que no quiere ser pianista, quiere tocar el piano y llenar un estadio...</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
