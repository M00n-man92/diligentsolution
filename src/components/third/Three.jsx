import React from 'react'
import "./three.scss";
import { LazyLoadImage }
  from 'react-lazy-load-image-component';

export default function Three() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (width > 900) {
    width = 400;
    height = 300
  }
  else {
    width = width * 1 / 3;
    height = 250;
  }
  return (
    <div className='three'>
      <div className="first">
        <div className="wahid">
          <LazyLoadImage
            alt=""
            width={width}
            height={height}
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
            A 15-year coffee development strategy was recently introduced by the Ethiopian Coffee and Tea Authority (ECTA), according to officials, and it will be crucial to optimizing the nation's coffee production capability.


          </p><p>
            The COVID-19 epidemic delayed the introduction of the plan, which was created in cooperation with the Ethiopian Institute of Agriculture Research (EIAR) and international NGO TechnoServe, by more than two years.
            It points out prospects along the entire coffee value chain to significantly enhance the nation's exports of high-quality, environmentally friendly coffee, boosting farmer incomes and generating jobs for millions of people.
            The Coffee strategy, which will be in effect until 2033, is built on six major pillars and intends to assist in the creation of a long-term, common vision among the sector's major players.
            These include processing, value-adding, marketing, value-added extension services, research, and sector strengthening.
          </p>
        </div>
      </div>
    </div>
  )
}
