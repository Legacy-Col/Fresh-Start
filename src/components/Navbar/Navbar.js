import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    })
  },[] )

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
          <img src='' alt='' className='logo' />
          <ul>
              <li><Link to='home' smooth={true} offset={0}>HOME</Link></li>
              <li><Link to='about' smooth={true} offset={-75}>ABOUT</Link></li>
              <li><Link to='services' smooth={true} offset={-125}>SERVICES</Link></li>
              <li><Link to='practices' smooth={true} offset={-240}>PRACTICES</Link></li>
              <li><Link to='contact' smooth={true} offset={-270} className='btn'>CONTACT US</Link></li>
      </ul>
      <img src='' alt=''/>
    </nav>
  );
}

export default Navbar;
