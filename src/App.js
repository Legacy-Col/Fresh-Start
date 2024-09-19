import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Title from './components/Title/Title';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Title subTitle='Our PRACTICES' title ='What We Offer'/>
    </div>
  );
}

export default App;
