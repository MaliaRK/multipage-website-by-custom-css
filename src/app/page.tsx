import React from 'react'
import Home from './components/home/page'
import About from './components/about/page'
import Contact from './components/contact/page'

const page = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page