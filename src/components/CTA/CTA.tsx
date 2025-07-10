import React from 'react'
import cta from "../../assets/images/House.jpg";
import phone from "../../assets/icons/phone-fill.svg";
import './cta.css'

const CTA = () => {
  return (
    <section className="cta">
    <div className="cta-text">
    <div className="gradient"></div>
      <h5>WARRANTY</h5>
      <h2>Our Systems Are Guaranteed For 20 Years</h2>
      <p>Unlock the potential of solar energy with our advanced solar panels, 
        backed by a 20-year guarantee. 
        Our commitment to quality ensures that you not only benefit from sustainable 
        power but also enjoy peace of mind with a long-term warranty.
      </p>
      <p>Embrace a greener, more cost-effective future as our solar 
        panels pave the way for a cleaner environment and a secure investment in renewable energy. 
        Join us in the journey towards a brighter, sustainable tomorrow.
      </p>
        
      <a href="#" className="btn">
        Read More
      </a>

      <a href="#" className="btn-2">
          Call Now
          <img src={phone} alt="Button Icon" />
      </a>
    </div>

    <div className="cta-img">
      <img src={cta}/>
    </div>
  </section>

  )
}

export default CTA