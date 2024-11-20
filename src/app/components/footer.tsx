import React from 'react'
import '@/app/styles/contact.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div>
        <ul>
            <li><Link href='../components/home' target='_blank'>Home</Link></li>
            <li><Link href='../components/about' target='_blank'>About Restaurant</Link></li>
            <li><Link href='../components/contact' target='_blank'>Contact</Link></li>
            <li><Link href='../components/about' target='_blank'>Menu</Link></li>
            <li><Link href='../components/about' target='_blank'>Reservation</Link></li>
        </ul>
      </div>
      <div className='copyright'>
        <img src="../copyright.svg" alt="copyright" />
        <p>All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer