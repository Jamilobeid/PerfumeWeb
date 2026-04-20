import "./Contact.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you. Send us a message or reach us through our social platforms.
        </p>

        <form className="contact-form">
          <div className="name-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-contact">
          <h2>Or contact us through Our Different Social Platforms</h2>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;