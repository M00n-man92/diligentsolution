import React from 'react'
import "./seven.scss"
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Seven({image, title}) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if( width > 900 ){
    width =170;
    height = 260
  }
  else {
    width =120;
    height = 150;
  }
  return (

    <div className='seven'>
      <LazyLoadImage
        alt=""
        width={width }
        height={height }
        src={image} // use normal <img> attributes as prop
        placeholderSrc="./assets/diligent.png"
        effect='blur'
        className='img'
     />
      {/* <img
        src={image}
        alt=""
        
        className='img'
        
    
      /> */}
      
      <span>
        {title}
      </span>
     
    </div>
  )
}
