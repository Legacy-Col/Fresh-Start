import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../law/left-chevron.png'
import back_icon from '../../law/right-arrow.png'
import user_1 from '../../law/People_1.jpg'
import user_2 from '../../law/People_2.jpg'
import user_3 from '../../law/People_3.jpg'
import user_4 from '../../law/smile-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0 

     const slideForward = () => {
        if (tx > -50) {
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials' id='testimonials'>
          <img src={back_icon} alt='' className='back-btn' onClick={slideForward} />
          <img src={next_icon} alt='' className='next-btn' onClick={slideBackward}/>

        <div className='slider'>
            <ul ref={slider}>
                  <li>
                      <div className='slide'>
                          <div className='user-info'>
                              <img src={user_1} alt='' />
                              <div className='user-desc'>
                                  <h3>Jason Johnson</h3>
                                  <span>Imo State, Nigeria</span>
                              </div>
                          </div>
                          <p>I needed help with estate planning, and Oma's Legal provided excellent advice. they took the time to understand my unique circumstances and developed a plan that met my specific needs. I feel confident knowing that my family is taken care of.</p>
                      </div>
                  </li>      
                  <li>
                      <div className='slide'>
                          <div className='user-info'>
                              <img src={user_2} alt='' />
                              <div className='user-desc'>
                                  <h3>Mathew Sczekov</h3>
                                  <span>Imo State, Nigeria</span>
                              </div>
                          </div>
                          <p>I can't say enough good things about Oma's Legal. they've been a lifesaver. The attorneys are not only knowledgeable but also compassionate and understanding. Ifelt like i was in good hands from the very beginning.</p>
                      </div>
                  </li>      
                  <li>
                      <div className='slide'>
                          <div className='user-info'>
                              <img src={user_3} alt=''/>
                              <div className='user-desc'>
                                  <h3>Julia Samuels</h3>
                                  <span>Imo State, Nigeria</span>
                              </div>
                          </div>
                          <p>I was facing serious criminal charges and felt completely lost. Oma's legal came to my rescue. they fought tirelessly to defend me and ultimatly secured a favourable outcome. their expertise and dedication were invaluable.</p>
                      </div>
                  </li>      
                  <li>
                      <div className='slide'>
                          <div className='user-info'>
                              <img src={user_4} alt=''/>
                              <div className='user-desc'>
                                  <h3>Julia Samuels</h3>
                                  <span>Imo State, Nigeria</span>
                              </div>
                          </div>
                          <p>I was facing serious criminal charges and felt completely lost. Oma's legal came to my rescue. they fought tirelessly to defend me and ultimatly secured a favourable outcome. their expertise and dedication were invaluable.</p>
                      </div>
                  </li>       
            </ul>      
        </div>

    </div>
  );
}

export default Testimonials;
