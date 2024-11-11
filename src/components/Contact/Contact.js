import React from 'react';
import './Contact.css'
import mail_icon from '../../law/mail.png'
import phone_icon from '../../law/ring-phone.png'
import location from '../../law/location.png'
import corporate from '../../law/corporate-at.jpg'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='cntct-col'>
        <h3>Send Us a Message</h3>
        <p> Feel free to contact us anytime and anywhere we will always be happhy to hear from you as your feedback are always appreciated.</p>
        <ul>
          <li><img src={mail_icon} alt='mail' />nwosucollins35@gmail.com</li>
          <li><img src={phone_icon} alt='phone' />+234 081-699-47010</li>
          <li><img src={location} alt='location' /> No 17 Bishop Williams Close</li>
        </ul>
      </div>
      <div className='free'>
        <img src={corporate} alt='corp' />
        <h3>Jason Manuel</h3>
        <span>Legal Law Support</span>
        <h4>For Free Consultation</h4>
        <p><a href='tel: (+234) 815-6643-234'>(+234) 815-6643-234</a></p>
      </div>
    </div>
  );
}

export default Contact;
