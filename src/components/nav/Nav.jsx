import React from 'react'
import "./nav.scss"
export default function Nav() {
  return (
    <div className='nav'>
      <div className="logo">
       <img src="./assets/Artboard 1@4x.png" alt="" />
      </div>
      <div className="sec">
      <div className="first">
        <a href='#home' onClick={(e)=>{console.log("")}}>
         About Us
        </a>
      </div>
      <div className="first">
        <a href='#about us' onClick={(e)=>{console.log("")}}>
          Our Principles
        </a>
      </div>
      
      <div className="first">
      <a href='#services' onClick={(e)=>{console.log("")}}>
          Our Services
        </a>
      </div>
      <div className="first" onClick={(e)=>{console.log("")}}>
        <a href='#contact us' >
          Contact Us
        </a>
      </div>
      </div>
      
    </div>
  )
}
