import icon1 from "../../assets/icons/flashlight-fill.svg";
import icon2 from "../../assets/icons/tools-fill.svg";
import icon3 from "../../assets/icons/shield-check-fill.svg";
import './services.css'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="center-text" data-aos="fade-down">
      <div className="gradient"></div>
        <h2>Our <span>Services</span></h2>
        <p>Professional solar panel installation for homes and businesses.<br />Hassle-free, high-quality, efficient solutions.</p>
      </div>

      <div className="services-content" data-aos="zoom-in-up">
        <div className="services-box">
          <img src={icon1} />
          <h3>Installation</h3>
          <p>
            Expert Installation for your solar panel needs, residential or commercial.
          </p>
          <a href="#">
            Learn More
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>

        <div className="services-box">
          <img src={icon2} />
          <h3>Maintenance</h3>
          <p>
            Efficient maintenance services to ensure your soalr panels perform optimally.
          </p>
          <a href="#">
            Learn More
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>

        <div className="services-box">
          <img src={icon3} />
          <h3>Cleaning</h3>
          <p>
            Through cleaning services to keep your solar panels shining bright.
          </p>
          <a href="#">
            Learn More
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services