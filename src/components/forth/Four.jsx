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
            placeholderSrc="./assets/diligent.png"
            effect='blur'
          // className='img'
          />
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3027%20(3).JPG?alt=media&token=e0bbd2fe-6465-4c15-b9c5-5da84f083471" alt="" /> */}
        </div>
        <div className="estnen">
          <p>
            85% of the Ethiopian production is natural (sundried) processed coffee; the remaining 15% is washed. Ethiopia starts harvesting coffee in September/October in lowland regions, and by the tip of January, 95% of the crop should be harvested. Washed coffees are shipped from January onwards and naturals from late March.
          </p>
        </div>
      </div>
    </div>
  )
}
