import React from 'react'
import "./ten.scss";
import { LazyLoadImage }
  from 'react-lazy-load-image-component';
import { Search, Handshake, VerifiedUser } from '@mui/icons-material';

export default function Ten() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width > 900) {
    width = width * 8 / 10;
    height = height * 7 / 10
  }
  else {
    width = width * 9 / 10;
    height = height * 6 / 10;
  }
  return (
    <div className='ten' id="about us">
      <div className="wahid">
        <LazyLoadImage
          alt=""
          width={width}
          height={height}
          // src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6166.JPG?alt=media&token=3d47a4c2-43d3-4d1c-8462-67c9972fef79" // use normal <img> attributes as prop
          src="./assets/e53cd690-68f1-11ed-a2d1-73ce7a3dfa49.jpeg"
          placeholderSrc="./assets/diligent.png"
          effect='blur'
        // className='img'
        />
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6166.JPG?alt=media&token=3d47a4c2-43d3-4d1c-8462-67c9972fef79" alt="" /> */}
      </div>

      <div className="tilte">
        <h2>
          Principles
        </h2>
        <span>
          We will attend to you and your interests without fault, and we vow to serve you with the integrity that befits you! That is how we build trust as well as the future!
        </span>
      </div>
      <div className="attributes">
        <div className="single">
          <div className="anothersingel">
            <div className="icon">
              <Search style={{ height: 40, width: 100 }} />
            </div>
            <h2>
              Diligence
            </h2>
            <span>We are motivated to keep following up on issues that are of value to you until you find the results you need.</span>
          </div>

        </div>
        <div className="single">
        <div className="anothersingel">
          <div className="icon">
            <VerifiedUser style={{ height: 40, width: 100 }} />
          </div>
          <h2>
            Integrity
          </h2>
          <span>We will attend to you and your interests with out fault and vow to serve you with the integrity that befits you!</span>
        </div>
        </div>
        <div className="single">
        <div className="anothersingel">
          <div className="icon">
            <Handshake style={{ height: 40, width: 100 }} />
          </div>
          <h2>
            Good- faith
          </h2>
          <span>We understand that trust is not something appears overnight. That is why we vow to start working on your business interests with the utmost good faith!</span>
        </div>
        </div>
      </div>
    </div>
  )
}
