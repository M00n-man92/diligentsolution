import React from 'react'
import "./nav.scss"
export default function Nav() {
  return (
    <div className='nav'>
      <div className="logo">
       <img src="./assets/logo1.PNG" alt="" />
      </div>
      <div className="sec">
      <div className="first">
        <a href='#about us' >
         US
        </a>
      </div>
      <div className="first">
        <a>
          Our Principles
        </a>
      </div>
      
      <div className="first">
      <a href='#services'>
          Our Services
        </a>
      </div>
      <div className="first">
        <a href='#contact us'>
          Contact Us
        </a>
      </div>
      </div>
      
    </div>
  )
}
