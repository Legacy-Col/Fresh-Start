import React from 'react';
import './About.css'
import about_img from '../../law/Lawyer.jpg'

const About = () => {
  return (
    <div className='about'>
          <div className='about-left'>
              <img src={about_img} className='about-img' />
            </div>   
          <div className='about-right'>
              <h3 className='alpha'>ABOUT OMA'S LEGAL</h3>
              <h2>Let Us Protect Your Treasured Future</h2>
              <p> </p>
              <p> </p>
          </div>   
    </div>
  );
}

export default About;
