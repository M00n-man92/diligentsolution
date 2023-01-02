import React from 'react'
import "./eleven.scss";
import { FileDownload } from '@mui/icons-material';

export default function Eleven() {
  return (
    <div className='eleven'>
      <span>
        For your inconvenience, below are links to stakeholder of the Ethiopian coffee export market.
      </span>
      <div className="linkes">
        <div className="single">
          <a href="https://www.ethiopiancoffeeassociation.org/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/image_2022-12-18_17-55-10.png" alt="" />
          </a>

        </div>
        <div className="single">
          <a href="https://ethiocta.gov.et/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/download.png" alt="" />
          </a>

        </div>
        <div className="single">
          <a href="https://www.moi.gov.et/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/trade.jpg" alt="" />
          </a>
        </div>
        <div className="single">
          <a href="https://addischamber.com/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/52d02df0-68f3-11ed-a2d1-73ce7a3dfa49.png" alt="" />
          </a>
        </div>
<div className="single">
<a href='./assets/ከ18_04_2015_24_04_2015_ዓ_ም_ተመጣጣኝ_ዝቅተኛ_የቡና_መሸጫ_ዋጋ.xlsx' download>
<FileDownload style={{ fontSize:"300%", color:"blue"}}/>
</a>
<a href='./assets/ከ18_04_2015_24_04_2015_ዓ_ም_ተመጣጣኝ_ዝቅተኛ_የቡና_መሸጫ_ዋጋ.xlsx' download>Click to download this week's price of coffee</a>
</div>
      </div>

      
    </div>
  )
}
