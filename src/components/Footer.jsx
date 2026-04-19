import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="divider2"></div>
      <div className="footer-content">

        <h2 className="logo">SoulScents</h2>

        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><MdEmail /></a>
        </div>

        <p className="footer-text">
          © 2026 SoulScents. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;