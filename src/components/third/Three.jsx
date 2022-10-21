import React from 'react'
import "./three.scss";
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Three() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if( width > 900 ){
    width =400;
    height = 300
  }
  else {
    width =width*1/3;
    height = 250;
  }
  return (
    <div className='three'>
      <div className="first">
        <div className="wahid">
        <LazyLoadImage
        alt=""
        width={width }
        height={height }
        src="./assets/IMG_6176.JPG"
        // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6176.JPG?alt=media&token=5f501e7b-dbe2-4537-b2c2-4b1cb5e15d36" // use normal <img> attributes as prop
        placeholderSrc="./assets/diligent.png"
        effect='blur'
        // className='img'
     />
    {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6176.JPG?alt=media&token=5f501e7b-dbe2-4537-b2c2-4b1cb5e15d36" alt="" /> */}
        </div>
        <div className="estnen">
          <p>
          Ethiopian coffees, when made well, may be mind-alteringly complex and overwhelmingly fragrant. They taste become independent from all other countries and never convincingly interchangeable with the other washed or sun dried arabica on Earth. From Ethiopia’s landscape comes a number of the best-known descriptors within the coffee world that over time have come to point Ethiopia unmistakably (blueberry, jasmine, bergamot) and are considered worldwide benchmarks of flavor.
          </p>
        </div>
      </div>
    </div>
  )
}
