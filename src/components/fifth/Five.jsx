import React from 'react'
import "./five.scss"
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Five() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if( width > 900 ){
    width = width * 1/4;
    height = 300
  }
  else {
    width =width*1/3;
    height = 250;
  }
  return (
    <div className='five'>
      <div className="first">
        <div className="duos">
          <h2>
            Our service
          </h2>
        </div>

        <div className="wahid">
        <LazyLoadImage
        alt=""
        width={width }
        height={height }
        src="./assets\Amaro Gayo.jfif"
        // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FAmaro%20Gayo.jfif?alt=media&token=a6882fa9-7c90-4fbb-94c8-0c14d9f4003b" // use normal <img> attributes as prop
        placeholderSrc="./assets/diligent.png"
        effect='blur'
        // className='img'
     />
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FAmaro%20Gayo.jfif?alt=media&token=a6882fa9-7c90-4fbb-94c8-0c14d9f4003b" alt="" /> */}
          <div className="estnen">
            <p>
              Ethiopia remains a specialty coffee industry darling for its incredible kind of flavors. Though fully traceability has been challenging in recent history, recent regulations have eased direct purchasing possible.
            </p>
            <p>
              Ethiopia coffees, when made well, may be mind-alteringly complex and overwhelmingly fragrant. They taste become independent from all other countries and never convincingly interchangeable with the other washed or sun dried arabica on Earth. From Ethiopia’s landscape comes a number of the best-known descriptors within the coffee world that over time have come to point Ethiopia unmistakably (blueberry, jasmine, bergamot) and are considered worldwide benchmarks of flavor.
            </p>
          </div>
        </div>
      </div>
      .
    </div>
  )
}
