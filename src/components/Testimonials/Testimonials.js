import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Testimonials.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
// import { EffectFade } from 'swiper/modules';
import user_1 from '../../law/People_1.jpg'
import user_2 from '../../law/People_2.jpg'
import user_3 from '../../law/People_3.jpg'
import user_4 from '../../law/smile-4.jpg'
import React from 'react';

const Testimonials = () => {
  return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}    
      spaceBetween={30}
      slidesPerView={1}
      navigation
      breakpoints={{
    // when window width is >= 320px
        480: {
        slidesPerView: 1
    },
    // when window width is >= 480px
        780: {
        slidesPerView: 2
    },
    
    // when window width is >= 640px
        1600: {
        slidesPerView: 2
    }
      }}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
    <div className='testimonials'>      
        <SwiperSlide className='slide'>
                    <div className='user-info'>
                      <img src={user_1} alt='' />
                    </div>
                    <div className='user-desc'>
                        <h3>Jason Johnson</h3>
                        <span>Imo State, Nigeria</span>
                        <p>I can't say enough good things about Oma's Legal. they've been a lifesaver. The attorneys are not only knowledgeable but also compassionate and understanding. Ifelt like i was in good hands from the very beginning.</p>
                    </div>      
        </SwiperSlide>
        <SwiperSlide className='slide'>
                    <div className='user-info'>
                      <img src={user_2} alt='' />
                    </div>
                    <div className='user-desc'>
                        <h3>Jason Johnson</h3>
                        <span>Imo State, Nigeria</span>
                        <p>I can't say enough good things about Oma's Legal. they've been a lifesaver. The attorneys are not only knowledgeable but also compassionate and understanding. Ifelt like i was in good hands from the very beginning.</p>
                    </div>  
        </SwiperSlide>
        <SwiperSlide className='slide'>
                    <div className='user-info'>
                      <img src={user_3} alt='' />
                    </div>
                    <div className='user-desc'>
                        <h3>Jason Johnson</h3>
                        <span>Imo State, Nigeria</span>
                        <p>I was facing serious criminal charges and felt completely lost. Oma's legal came to my rescue. they fought tirelessly to defend me and ultimatly secured a favourable outcome. their expertise and dedication were invaluable.</p>
                    </div> 
        </SwiperSlide>
        <SwiperSlide className='slide'>
                    <div className='user-info'>
                      <img src={user_4} alt='' />
                    </div>
                    <div className='user-desc'>
                        <h3>Jason Johnson</h3>
                        <span>Imo State, Nigeria</span>
                        <p>I was facing serious criminal charges and felt completely lost. Oma's legal came to my rescue. they fought tirelessly to defend me and ultimatly secured a favourable outcome. their expertise and dedication were invaluable.</p>
                    </div>      
        </SwiperSlide>
    </div>
    </Swiper>
  );
}

export default Testimonials;






















