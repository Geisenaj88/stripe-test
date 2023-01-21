import React from 'react'
import './hero.styles.scss'

import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()
  
  return (
    <section className="hero is-large is-primary hero-image">
      <div className="hero-body">
        <div className="container">
          <p className="hero-title">Bags Reimagined for modern life</p>
          <div className='shop-now-button'>
            <button className='button is-black' id='shop-now' onClick={() => navigate('/shop')}>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;