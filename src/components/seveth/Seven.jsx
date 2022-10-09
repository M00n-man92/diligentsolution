import React from 'react'
import "./seven.scss"

export default function Seven({image, title}) {
  return (
    <div className='seven'>
      <img src={image} alt="" />
      
      <span>
        {title}
      </span>
     
    </div>
  )
}
