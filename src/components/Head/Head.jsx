import './Head.scss'
import backgroundImage from '../../../public/eagle.jpg'

import React from 'react'
import Navbar from '../Navbar/Navbar'

const Head = () => {
  return (
    <div className='head' id='#head'>
      <Navbar/>
      <h2>Creative Template</h2>
      <h1>WELCOME TO MOGO</h1>
      <div className="hr"></div>
      <a to="/" className="flat-button">
            Learn More
      </a>
    </div>
  )
}

export default Head
