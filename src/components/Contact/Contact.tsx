
import './contact.css'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-form" data-aos="zoom-in">
      <div className="gradient"></div>
        <form action="">
          <h5>YOUR PROJECT</h5>
          <h2>Have A Project In Mind? <br /> Let's Go To Work</h2>
          <p>Full Name</p>
          <input type="text" placeholder="Your name" required />
          <p>Message</p>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Write Message Here..."
            defaultValue=""
          ></textarea>
          <a href="#" className="btn">
           Send Message
          </a>
        </form>
      </div>
    </section>
  )
}

export default Contact