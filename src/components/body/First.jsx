import React, { useRef, useState, useEffect } from 'react'
import "./first.scss";
import { LazyLoadImage }
  from 'react-lazy-load-image-component';
import { imagedata } from "../../data";

export default function First() {
  const [itemm,setitemm]=useState(0)
  const [sizeing, setSizing] = useState(25.4);
  const autoPlay = useRef()
  const width = window.innerWidth;
  const height = window.innerHeight;  
  useEffect(() => {
        autoPlay.current = heandler
    })
    // setInterval(()=>heandler("r"),8000)
    useEffect(() => {
        const andle = () => {
            autoPlay.current()
        }
        // andle()
        setInterval(andle, 4000)

    }, [])
    
  const heandler = () => {
    if(width<900){

      setSizing(40);
    }
    // else if (digits == "r") {
    itemm !== 4 ? setitemm(itemm + 1) : setitemm(0)
    // console.log(itemm)
    // }
}

  
  return (
    <div className='body'>
      <div className="swinger">
        <div className="keeponmoving" style={{ transform: `translateX(${-sizeing * itemm}%)` }}>
          {imagedata.map((item,index)=>(
            <LazyLoadImage
            alt=""
            height={height}
            // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3035%20(2).JPG?alt=media&token=a32cf229-b783-42df-a803-8570e4a76d2d" // use normal <img> attributes as props
            src={item}
            width={width}
            // ./assets/diligent.png
            placeholderSrc="./assets/Artboard 1@4x.png"
            effect='blur'
            className='img'
          />
          ))}
          
        </div>
      </div>

      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3035%20(2).JPG?alt=media&token=a32cf229-b783-42df-a803-8570e4a76d2d"
        alt=""
        loading='eager'
      /> */}
      <div className="info">
        <div className="one">
          <span>
          We help you find the coffee you need, when and how you need it!
          </span>
          <span>Outstanding results, less worry!</span>
        </div>
        <div className="two">
          <span>
          We help you find the coffee you want within the time and price range you specify, with significantly less headache!
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
