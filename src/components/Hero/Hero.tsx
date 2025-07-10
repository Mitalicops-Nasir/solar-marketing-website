
import './hero.css'
import phone from '../../assets/icons/phone-fill.svg'
import hero from '../../assets/images/worker-1.jpeg'
import pin from '../../assets/icons/map-pin-fill.svg'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className='gradient'></div>
      <div className="hero-text">
        <h1>
        Switch To Green With Innovative Solar Panels
        </h1>
        <p>
          Professional solar panel installation for homes and buisinesses. Hassle-free, high-quality, efficient solutions.
        </p>
        <a href="#" className="btn-1">
          Get a Quote
        </a>
        <a href="#" className="btn-2">
          Call Now
          <img src={phone} alt="Button Icon" />
        </a>

      <div className='solar-panel-container'>
        <div className='solar-panel-info-1'>
          <h1 className='solar-content-h1'>10<span>+</span></h1>
          <p className='solar-content-p'>Years</p>
        </div>

        <div className='solar-panel-info-2'>
          <h1 className='solar-content-h1'>954<span>+</span></h1>
          <p className='solar-content-p'>Projects</p>
        </div>

        <div className='solar-panel-info-3'>
          <h1 className='solar-content-h1'>7<img src={pin} alt="" /></h1>
          <p className='solar-content-p'>Locations</p>
        </div>
      </div>
        
     </div> 
      <div className="hero-img">
        <img src={hero} />
      </div>
    </section>
  )
}

export default Hero