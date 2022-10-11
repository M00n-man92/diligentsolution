import React from 'react'
import "./eleven.scss";
import {Link} from "react-router-dom";
export default function Eleven() {
  return (
    <div className='eleven'>
      <span>
      For your inconvenience, below are links to stalk holder of the Ethiopian coffee export market
      </span>
      <div className="linkes">
        <div className="single">
        <a href=" " target="_blank" rel="noopener noreferrer">
        <img src="./assets/download.png" alt="" />
        </a>

        </div>
        <div className="single">
          <a href="https://ethiopiancoffeeguide.com/"target="_blank" rel="noopener noreferrer">
            <img src="./assets/trade.jpg" alt="" />
          </a>
        </div>
        
      </div>
    </div>
  )
}
