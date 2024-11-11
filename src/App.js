import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Title from './components/Title/Title';
import Practice from './components/Practices/Practice';
import Form from './components/Form/Form';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Title subTitle='Our PRACTICES' title='What We Do' />
      <div className='formz'> 
          <Practice />
          <Form />
      </div>
      
      <Testimonials />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact />
      <Footer />
     </div>
  );
}

export default App;
