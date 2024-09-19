import React from 'react';
import './Practice.css'
import corprate from '../../law/team.png'
import family from '../../law/happy.png'
import criminal from '../../law/arrest.png'
import estate from '../../law/house.png'

const Practice = () => {
  return (
    <div className='vault'>
          <div className='box-vault'>
                <div className='box'>
                  <img src= { corprate } alt='' />
                <div className='desc'>
                    <h3>Corprate Law</h3>
                    <p>We Provide expert guidiance on a wide range of corporate matters, including business formation, mergers, and acquisitions, corporate governance, and compliance. We help businesses navigate complex legal landscapes and achieve their strategic    objectives.</p>
                </div>
                </div>
                <div className='box'>
                  <img src= { family } alt='' />
                <div className='desc'>
                    <h3>Family Law</h3>
                    <p>We also offer compassionate guidiance on family law matters, such as divorce, child custody, child support and property division. We strive to help clients navigate these challenging times with sensitivity and professionalism.</p>
                </div>
                </div>
                <div className='box'>
                  <img src= { criminal } alt='' />
                <div className='desc'>
                    <h3>Criminal Law</h3>
                    <p>Our criminal defence attorneys are committedto protecting the rights of individuals accused of crimes. We provide aggressive representation in court and work to achieve the best possible outcomes for our clients.</p>
                </div>
                </div>
                <div className='box'>
                  <img src= { estate } alt='' />
                <div className='desc'>
                    <h3>Real Estate Law</h3>
                    <p>Our real estate attorneys specialize in property transactions, land use regulations, and property disputes. We assist clients with buying, selling, leasing and financing properties, ensuring a smooth and legally sound process.</p>
                </div>   
                </div> 
            </div>
    </div>
  );
}

export default Practice;
