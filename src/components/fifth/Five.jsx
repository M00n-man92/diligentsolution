import React from 'react'
import "./five.scss"
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Five() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width > 900) {
    width = width * 1 / 4;
    height = 300
  }
  else {
    width = width * 1 / 3;
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
            width={width}
            height={height}
            src="./assets\Amaro Gayo.jfif"
            // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FAmaro%20Gayo.jfif?alt=media&token=a6882fa9-7c90-4fbb-94c8-0c14d9f4003b" // use normal <img> attributes as prop
            placeholderSrc="./assets/diligent.png"
            effect='blur'
          // className='img'
          />
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FAmaro%20Gayo.jfif?alt=media&token=a6882fa9-7c90-4fbb-94c8-0c14d9f4003b" alt="" /> */}
          <div className="estnen">
            <p>
              Simply put, we get you the coffee you need: type, price range, and shipment schedule.
            </p>
            <h4>
              How does it work?

            </h4>
            <p>
              You share with us the details of your request including:
            </p>
            <ul>
              <li>
                Origin
              </li>
              <li>
                Grade
              </li>
              <li>
                Target price
              </li>
              <li>
                Destination and
              </li>
              <li>
                Other requirements (certificates and the like)
              </li>
            </ul>
            <p>
              We then disseminate your request with exporters who work with us and make sure they comply with all your requirements. Instead of communicating with numerous exporters individually, you contact them all at one place. However, that is not even the best part!
              We will also coordinate with the exporters and facilitate the export process including quality inspections, document verification and so on totally for free!

            </p>



          </div>
        </div>
      </div>

    </div>
  )
}
