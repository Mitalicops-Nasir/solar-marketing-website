import worker from "../../assets/images/Worker-2.jpg";
import icon1 from "../../assets/icons/thumb-up-fill.svg";
import icon2 from "../../assets/icons/map-pin-fill.svg";
import icon3 from "../../assets/icons/tools-fill.svg";
import "./feature.css";

const Feature = () => {
  return (
    <section className="features">
      <div className="feature-img">
        <img src={worker} />
      </div>

      <div className="feature-text">
        <h5>SWITCH TO GREEN</h5>
        <h2>Switching To Green Has Never Been Easier</h2>
        <div className="feature-info">
          <div className="gradient"></div>
          <div className="feature-box">
            <img src={icon1} />

            <h3>New solar panels</h3>
            <p>
              Discover new high-efficiency solar panel models for maximum energy
              output.
            </p>
          </div>

          <div className="feature-box">
            <img src={icon2} />
            <h3>Regional incentives</h3>
            <p>
              Take advantage of reginal incentives for cost savings on
              installation.
            </p>
          </div>

          <div className="feature-box">
            <img src={icon3} />
            <h3>Installation by our experts</h3>
            <p>
              Expert installation by qualified and experienced professionals for
              optimal performance.
            </p>
          </div>
        </div>
        <a href="#" className="btn">
          Try Now
        </a>
      </div>
    </section>
  );
};

export default Feature;
