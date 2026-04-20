import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      
      <div className="cta-image">
        
        <div className="cta-content">
          <h2>Ready to find your signature scent?</h2>
          
          <p>
            Explore a curated collection of fragrances crafted to express
            elegance, confidence, and individuality.
          </p>
          <Link to ="/shop">
            <button className="cta-btn">Explore Collection</button>
          </Link>
        </div>

      </div>

    </section>
  );
}

export default CTA;