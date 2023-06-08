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
        <a href='#about'>
         <b>About Us</b>
         
        </a>
      </div>
      <div className="first">
        <a href='#principles'>
          <b>Our Principles</b>
        </a>
      </div>
      
      <div className="first">
      <a href='#services'>
         <b>Our Services</b>
          
        </a>
      </div>
      <div className="first">
        <a href='#contact us' >
          <b>
          Contact Us
          </b>
          
        </a>
      </div>
    
      </div>
          <div className="first">
        <a href="https://bereketera.github.io/minnav/min.html" >
          <b>
          minimum price
          </b>
          
        </a>
      </div>  
    </div>
  )
}
