import React from 'react'

export default function Eight({ isOpen, isSet, isObj, neObj }) {
  return (
      <div className={'eight ' + (isOpen && "active")}>
        <div className="first">
          <div className="wahid">
            <h2>
              {neObj.txt}
            </h2>
          </div>
          <div className="estenen">
            <div className="somethin">
              <h2>
                Location
              </h2>
              <span>
                {neObj.Location}
              </span>
            </div>
            <div className="somethin">
              <h2>
                Flavor
              </h2>
              <span>
                {neObj.Flavor}
              </span>
            </div>
            <div className="somethin">
              <h2>
                Processing
              </h2>
              <span>
                {neObj.Processing}
              </span>
            </div>
            <div className="somethin">
              <h2>
                Growing Altitude
              </h2>
              <span>
                {neObj.Growing}
              </span>
            </div>
            <div className="somethin">
              <h2>
                Harvest
              </h2>
              <span>
                {neObj.Harvest}
              </span>
            </div>
            <div className="somethin">
              <h2>
                Availability
              </h2>
              <span>
                {neObj.Availability}              </span>
            </div>
            <div className="somethin">
              <h2>
                Renown Sub-Areas
              </h2>
              <span>
                {neObj.renown}
              </span>
            </div>
            <div className="duos">
              <a href="#contact us">
              <button>
                Submit your request
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
