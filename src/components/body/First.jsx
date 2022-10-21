import React from 'react'
import "./first.scss";
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function ({width,height}) {
 
    width = window.innerWidth;
    height = window.innerHeight;

  return (
    <div className='body'>
      <LazyLoadImage
        alt=""
        height={height}
        // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3035%20(2).JPG?alt=media&token=a32cf229-b783-42df-a803-8570e4a76d2d" // use normal <img> attributes as props
        src="./assets/IMG_3035 (2).JPG"
        width={width} 
        placeholderSrc="./assets/diligent.png"
        effect='blur'
     />
      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3035%20(2).JPG?alt=media&token=a32cf229-b783-42df-a803-8570e4a76d2d"
        alt=""
        loading='eager'
      /> */}
      <div className="info">
        <div className="one">
          <span>
          We help you find the coffee you need, when and how you need it!

Outstanding results, less worry!


          </span>
        </div>
        <div className="two">
          <span>
          We aid in easing your in finding the coffee you want in the time and price range you specify with significantly less headache!
          </span>
        </div>
        <div className="three">
          <a href="#contact us">
          Submit Your Request Now!
          </a>
        </div>
      </div>

    </div>
  )
}
