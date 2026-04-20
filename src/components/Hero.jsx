import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Signature Scent</h1>
        <p>Luxury perfumes for every moment</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;