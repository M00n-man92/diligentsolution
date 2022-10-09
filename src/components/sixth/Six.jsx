import React from 'react'
import Seven from '../seveth/Seven'
import "./six.scss"
import { useState } from 'react';
import Eight from '../eighth/Eight';

export default function Six() {
  const coffee = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3075%20(2).JPG?alt=media&token=1e86cc8d-c80b-44d7-bcce-383b52f1dab1",
      Location: "The Sidama Region is a regional state in southern Ethiopia.",
      Flavor: "rich, full body, vibrant crisp acidity, and floral and citrus notes.",
      Processing: "Natural, washed",
      Growing: "1,500-2,200 meters (4,900-7,225 feet)",
      Harvest: "October-January",
      Availability: "January-December",
      renown: "bensa, werka, Nensebo ",
      txt: "Djimmah"
    },
    {
      img: "",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Hrrar"
    },
    {
      img: "",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Limu"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_3061%20(3).JPG?alt=media&token=e60a2a13-c0d9-4018-bbe0-5d51e18c8c5d",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Teppi"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6950.JPG?alt=media&token=194dc3aa-560e-4381-9d27-f3afc0d8f1d6",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Gujji"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FIMG_6979.JPG?alt=media&token=44add76f-8b59-4c2e-9c1a-80d17de03efb",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Lekmpti"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FCapture.PNG?alt=media&token=55968ead-8776-43e3-ab10-494159ba8be8",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Sidamo"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/coffee-b91b2.appspot.com/o/coffe%2FCapture1.PNG?alt=media&token=d15b6e5c-155d-4f8d-b8a9-799d9021f0c2",
      Location: "",
      Flavor: "",
      Processing: "",
      Growing: "",
      Harvest: "",
      Availability: "",
      renown: "",
      txt: "Yirgacheffee"
    }
  ]
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState({})
  const handler = (item) => {
    setObj(item);
    setOpen(!open);
    // console.log(item)

  }
  return (
    <div className='six'>
      <div className="first">
        <div className="wahid">
          <h2>Coffee Profiles</h2>
        </div>
        <div className="estenen">
          {coffee.map((item, index) =>
            <div className="somethin" key={index} onClick={() => handler(item)} >

              <Seven image={item.img} title={item.txt} />
            </div>
          )}

          {/* <Modal open={open} onClose={() => {
            setOpen(false)
            setObj({})
          }}> */}
          {/* <div className={'dont ' + (open && "active")}> */}

          {/* </div> */}




          {/* </Modal> */}
        </div>
        {/*  */}

          
          <Eight isOpen={open} isSet={setOpen} isObj={setObj} neObj={obj}/>


      </div>
    </div>
  )
}
{/* <div className={'eight ' + (open && "active")}>
            <div className="first">
              <div className="wahid">
                <h2>
                  Djiah
                </h2>
              </div>
              <div className="estenen">
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="somethin">
                  <h2>
                    Location
                  </h2>
                  <span>
                    this be the location
                  </span>
                </div>
                <div className="duos">
                  <button>
                    Submit your request
                  </button>
                </div>
              </div>
            </div>
          </div> */}