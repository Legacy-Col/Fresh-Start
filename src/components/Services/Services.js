import React from 'react';
import './Services.css'
import lawyers  from '../../law/Lawyers.jpg';


const Services = () => {
  return (
      <div className='services'>
            <div className='service'>
                    <img src={lawyers} alt='' />
            </div>
                    <div className='caption'> 
                        <h3>Why Choose Our Top lawyers at Oma's Legal</h3>
                          <p className='p1'> "Our team of Professionals in this field are committed to providing and safe guarding the businesses, rights and legal opinions of our clients.</p>
                          <p className='p2'>The members of our firm are committed to providing succesful guidiances as well as legal services to our clients in terms of their business, and of their legal rights. We bring in the best brains so as to provide trustworthy services that bring smiles to our clients.</p>
                    </div> 
      </div>
  );
}

export default Services;
