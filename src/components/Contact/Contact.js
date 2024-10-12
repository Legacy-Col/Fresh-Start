import React from 'react';
import './Contact.css'
// import mail_icon from '../../Law/' 
// import phone_icon from '../../Law/' 
// import address_icon from '../../Law/' 

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className='cntct-col'>
            <h3>Send Us a Message</h3>
              <p> Feel free to contact us anytime and anywhere we will always be happhy to hear from you as your feedback are always appreciated.</p>
              <ul>
                  <li> {/*<img src={mail_icon} alt =''/>*/}nwosucollins35@gmail.com</li>
                  <li>{/*<img src={phone_icon} alt='' />*/} +234 081-699-47010</li>
                  <li>{/*<img src={address_icon} alt='' />*/} No 17 Bishop Williams Close</li>
              </ul>  
        </div>
    </div>
  );
}

export default Contact;
