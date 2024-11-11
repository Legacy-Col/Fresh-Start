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

  // const [mobileMenu, setMobileMenu] = useState(false)
  // const ToggleMenu = () => {
  //   mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  // }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
          <p className='logo'> OMA's <span>LEGAL</span></p>
          <ul>
              <li><Link to='home' smooth={true} offset={0}>HOME</Link></li>
              <li><Link to='about' smooth={true} offset={-75}>ABOUT</Link></li>
              <li><Link to='services' smooth={true} offset={-125}>SERVICES</Link></li>
              <li><Link to='practices' smooth={true} offset={-240}>PRACTICES</Link></li>
              <li><Link to='testimonials' smooth={true} offset={-75}>TESTIMONIALS</Link></li>
              <li><Link to='contact' smooth={true} offset={-270} className='btn'>CONTACT US</Link></li>
      </ul>
      {/* <img src={menu_icon} alt='' className='menu-icon' onClick={ToggleMenu}/> */}
    </nav>
  );
}

export default Navbar;
