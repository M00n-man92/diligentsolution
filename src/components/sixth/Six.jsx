import React, { useRef, useState, useEffect } from 'react'
import Seven from '../seveth/Seven'
import "./six.scss"
import Eight from '../eighth/Eight';
import { ArrowForwardIosOutlined, ArrowBackIosNewOutlined } from '@mui/icons-material'
import { coffee } from "../../data";
export default function Six() {
  const w = window.innerWidth;
  const [size, setSize] = useState(60);
  const [itemm,setitemm]=useState(0)
  const autoPlay = useRef()
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

    // else if (digits == "r") {
      if(w<900){
        itemm !== 2 ? setitemm(itemm + 1) : setitemm(0)
      }
      else{
        itemm !== 1 ? setitemm(itemm + 1) : setitemm(0)
      }
    
    // console.log(itemm)
    // }
}
  const nion = (digits) => {
    if(w>1000){
      setSize(60);
      if (digits === "l") {
        itemm !== 0 ? setitemm(itemm - 1) : setitemm(1)
        // console.log(itemm)
      }
      else if (digits === "r") {
        itemm !== 1 ? setitemm(itemm + 1) : setitemm(0)
      }
    }
    else if (w<900){
      setSize(50);
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
            <div className="keepmoving" style={{ transform: `translateX(${-size * itemm}%)` }}>
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
