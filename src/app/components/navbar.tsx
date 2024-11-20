'use client'
import React, {useState} from 'react'
import '@/app/styles/home.css'
import Link from 'next/link';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        setShowMenu(!showMenu);
    }
  return (
    <div>
        <img src="/hamburger.svg" alt="hamburger-icon" className='hamburger' onClick={handleClick}/>
        {showMenu && (
        <div className='menu'>
          <button id='btn'><Link href='/components/about' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>About</Link></button>
          <button id='btn'><a href='#Menu' style={{ color: 'white', textDecoration: 'none' }}>Menu</a></button>
          <button id='btn'><Link href='/components/contact' target='_blank' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></button>
        </div>
        )}
    </div>
  )
}

export default Navbar