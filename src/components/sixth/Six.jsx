import React from 'react'
import Seven from '../seveth/Seven'
import "./six.scss"
import { useState } from 'react';
import Eight from '../eighth/Eight';
import { Modal } from '@mui/material';
import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material'
export default function Six() {
  const h = window.innerHeight;
  const w = window.innerWidth;
  const coffee = [
    {
      img: "./assets/IMG_3075 (2).JPG",
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
      Location: "Eastern Ethiopia 9.31258302382947, 42.12399714838904",
      Flavor: "Wild berry acidity with a strong, dry edge and heavy body",
      Processing: "Natural",
      Growing: "6,150-7,150 feet (1,880-2,180 meters)",
      Harvest: "October-January",
      Availability: "May-July",
      renown: "",
      txt: "Harrar"
    },
    {
      img: "",
      Location: "North western Oromia Region, Ethiopia (9.16748158719518, 36.34036679894677)",
      Flavor: "Noticeably wine-like and spicy flavor with floral overtones, some acidity, and sharpness",
      Processing: "Washed",
      Growing: "1,100-1,900 meters (3,600-6,225 feet)",
      Harvest: "October-January",
      Availability: "January-December",
      renown: "Agaro, Gore",
      txt: "Limu"
    },
    {
      img: "./assets/IMG_3061 (3).JPG",
      Location: "Southern Ethiopia 7.196670606110836, 35.427997270582615",
      Flavor: "Wild, bright, fruity, complex, some deeper hints like cocoa",
      Processing: "Washed",
      Growing: "4,650-8,200 feet (1,300-2500 meters)",
      Harvest: "October-January",
      Availability: "December-January",
      renown: "bench, sheka",
      txt: "Teppi"
    },
    {
      img: "./assets/IMG_6950.JPG",
      Location: "Guji Zone, souther Ethiopian (5.622472552255369, 38.269046235592356)",
      Flavor: "Peach, Caramel, Brown Sugar",
      Processing: "Natural, washed",
      Growing: "1,900-2,100 meters (6,200 -6,9000 feet)",
      Harvest: "October-January",
      Availability: "December-January",
      renown: "Shakisso, Bule Hora",
      txt: "Gujji"
    },
    {
      img: "./assets/IMG_6979.JPG",
      Location: "Western Oromia Region of Ethiopia (9.090426744090372, 36.555345692458054)",
      Flavor: "Heavier body, rich yet balanced, lingering profile",
      Processing: "Natural, washed",
      Growing: "5,575-7,225 feet (1,700-2,200 meters)",
      Harvest: "February-April",
      Availability: "February-December",
      renown: "Ghimbi, Kebie ",
      txt: "Lekmpti"
    },
    {
      img: "./assets/Capturee.PNG",
      Location: "The Sidama Region is a regional state in southern Ethiopia. (Bensa: 6.560818658771755, 38.92348567711699)",
      Flavor: "rich, full body, vibrant crisp acidity, and floral and citrus notes.",
      Processing: "Natural, washed",
      Growing: "1,500-2,200 meters (4,900-7,225 feet)",
      Harvest: "October-January",
      Availability: "January-December",
      renown: "bensa, werka, Nensebo ",
      txt: "Sidamo"
    },
    {
      img: "./assets/Capture1.PNG",
      Location: "East Welega Zone of the Oromia Region (6.160945897380547, 38.20163697700685)",
      Flavor: "Classic Arabica profile, smooth, mild, fruity acidity with a floral aroma",
      Processing: "Natural, washed",
      Growing: "5,900-6,250 feet (1,800-1,900 meters)",
      Harvest: "October-January",
      Availability: "January-December",
      renown: "Kochere, Idido, Konga",
      txt: "Yirgacheffee"
    }
  ]
  const [itemm, setitemm] = useState(0)
  const nion = (digits) => {
    if(w>1000){
      if (digits === "l") {
        itemm !== 0 ? setitemm(itemm - 1) : setitemm(1)
        // console.log(itemm)
      }
      else if (digits === "r") {
        itemm !== 1 ? setitemm(itemm + 1) : setitemm(0)
      }
    }
    else if (w<900){
      if (digits === "l") {
        itemm !== 0 ? setitemm(itemm - 1) : setitemm(3)
        // console.log(itemm)
      }
      else if (digits === "r") {
        itemm !== 3 ? setitemm(itemm + 1) : setitemm(0)
      }
    }
    
  }
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState({})
  const handler = (item) => {
    setObj(item);
    setOpen(!open);
    // console.log(item)

  }
  return (

    <div className='six' id="services">
      <div className="first">
        <div className="wahid">
          <h2>Coffee Profiles</h2>
        </div>
        <div className="nexttowahid">
          <span>Ethiopian coffee profile for your enjoyment</span>
        </div>
        <div className="closertoestenn">
           <div className="lightnigga">
            <ArrowBackIosNewOutlined className='ion' onClick={() => nion("l")} />
          </div> 
          <div className="estenen">
            <div className="keepmoving" style={{ transform: `translateX(${-50 * itemm}%)` }}>
              {coffee.map((item, index) =>
                <div className="somethin" key={index} onClick={() => handler(item)} >

                  <Seven image={item.img} title={item.txt} />
                </div>
              )}
            </div>
          </div>
          <div className="darknigga">
            {/* <img src="/assets/arrowr.png" alt="" /> */}

            <ArrowForwardIosOutlined className='ion' onClick={() => nion("r")} />
          </div>
        </div>

        <div className="thelasta">
          <Eight isOpen={open} isSet={setOpen} isObj={setObj} neObj={obj} />
        </div>




      </div>
    </div >

  )
}
