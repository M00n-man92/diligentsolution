import React from 'react'
import "./seven.scss"

export default function Seven({image, title}) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  console.log(w,h);
  return (

    <div className='seven'>
      <img
        src={image}
        alt=""
        
        className='img'
        
    
      />
      
      <span>
        {title}
      </span>
     
    </div>
  )
}
