import React from 'react'
import "./four.scss"
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Four() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width > 900) {
    height = 240
  }
  else {
    height = 170;
  }
  return (
    <div className='four'>
      <div className="first">
        <div className="whaid">
          <LazyLoadImage
            alt=""
            width={width}
            height={height}
            src="./assets/IMG_3027 (3).JPG"
            // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3027%20(3).JPG?alt=media&token=e0bbd2fe-6465-4c15-b9c5-5da84f083471" // use normal <img> attributes as prop
            placeholderSrc="./assets/Artboard 1@4x.png"
            // ./assets/diligent.png
            effect='blur'
          // className='img'
          />
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3027%20(3).JPG?alt=media&token=e0bbd2fe-6465-4c15-b9c5-5da84f083471" alt="" /> */}
        </div>
        <div className="estnen">
          <p>
          The minimum coffee pricing directive was a new regulation that the Ethiopian Tea & Coffee Association issued to the market. The regulation obliges Ethiopian coffee exporters to sell their product at a minimum price or more. The weekly minimum pricing is broken down by location, grade, and exporter type.</p>
        </div>
      </div>
    </div>
  )
}
