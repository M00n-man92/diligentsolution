import React from 'react'
import "./first.scss";
export default function () {
  return (
    <div className='body'>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3035%20(2).JPG?alt=media&token=a32cf229-b783-42df-a803-8570e4a76d2d"
        alt=""
        loading='eager'
      />
      <div className="info">
        <div className="one">
          <span>
            Ethiopia is where Coffee itself calls home!
          </span>
        </div>
        <div className="two">
          <span>
          Coffee is native to southwestern Ethiopia, especially the Kaffa region.
          </span>
        </div>
        <div className="three">
          <button>
          SUBMIT YOUR REQUEST
          </button>
        </div>
      </div>

    </div>
  )
}
