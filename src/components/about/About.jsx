import React from 'react'
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h3>About Us</h3>
      </div>
      <div className="blocks">
        <div className="firstblock">
          <p>From a total of 300,000 tons of coffee, Ethiopia’s total export earnings for the 2021/22 fiscal year ended with a record of 1.4 billion USD. In the first quarter of the current fiscal year alone, an export earning of over $ 420 million has been reported. From such figures, one can presume the hard work and few sleepless nights for all involved.</p>


          <p>Doing business with an entity on the other side of the globe is always a bit challenging. Having a capable and trustworthy assistant who understands the economic, legal, political, and social landscape is ideal for achieving success in international trade.</p>


          {/* <p>We recognize Ethiopia’s potential as well as the need for a company to smoothen and aid in all facades of business in Ethiopia; that is why Diligent Trade Solutions was established.</p> */}

        </div>
        <div className="vertical"> </div>
        <div className="secondblock">

          <p>Diligent Trade Solutions (DTS) is an emerging company aiming to solve some of the critical challenges in Ethiopian the coffee export business. Equipped with experts in coffee sourcing, quality inspection, logistics, and documentation, DTS is helping ease the burden of coffee buyers; desired result, less heartache!
DTS looks to facilitate exports by representing interested companies and assisting them in any way possible, thereby providing investors, traders, and various entities a much-needed insight into minimizing their risks and assurance of results. We serve as your office abroad.
Partnering with Diligent Trade Solutions is a strategic decision that will undoubtedly give you an edge and add value to your company’s long-term business goals.</p>

          {/* <p>What DTS does is just represent! We deal with suppliers, government offices, buyers, and so on: whatever the office, whatever the issue, as long as you have interests, we will serve as ‘your office abroad’, on your behalf, upon you command. Diligent Trade Solutions will serve as a strategic partner and add value to your company’s long-term business goals.</p> */}

        </div>
      </div>
    </div>
  )
}
