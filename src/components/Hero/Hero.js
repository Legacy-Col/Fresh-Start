import React from 'react';
import'./Hero.css'
import arrows from '../../law/arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='home'>
        <div className='hero-text'>
              <h1>Let Us Protect Your Future.</h1>
              <p>Oma's Legal is a forward-thinking law firm decicated to safe gaurding our client' futures. We believe in the power of legal representation to shape a brighter tomorrow for individuals and businesses alike.</p>
              <button className='btn'>Explore More <img src={ arrows } alt='arrows' /> </button>
        </div>
    </div>
  );
}

export default Hero;
