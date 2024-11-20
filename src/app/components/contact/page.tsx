import React from 'react'
import '@/app/styles/contact.css'
import Footer from '../footer'

const Contact = () => {
  return (
    <div className='contact'>
        <h2>Contact Us</h2>
        <div className='content'>
            <img src="../contact.png" alt="contact" id='contact'/>
            <div>
                <div className='location'>
                    <img src="../location.png" alt="location" />
                    <h4>545 Dong Khoi, District 1, Ho Chi Minh City</h4>
                </div>
                <p><strong>Open:</strong> 10:00 am - 23:00 pm</p>
                <strong>+123 12345678</strong>
                <button>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Contact