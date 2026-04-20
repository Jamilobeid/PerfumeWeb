import "./Contact.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Contact() {
  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!firstName || !lastName || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
  };
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you. Send us a message or reach us through our social platforms.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <input name="firstName" type="text" placeholder="First Name" />
            <input name="lastName" type="text" placeholder="Last Name" /> 
          </div>

          <input name="email" type="email" placeholder="Email Address" />
          <input name="phone" type="tel" placeholder="Phone Number" />
          <textarea name="message" placeholder="Your Message" rows="6"></textarea>

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