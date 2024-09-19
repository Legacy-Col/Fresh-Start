import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
          <img src='' alt='' className='logo' />
          <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li><button className='btn'>CONTACT US</button></li>
          </ul>
    </nav>
  );
}

export default Navbar;
