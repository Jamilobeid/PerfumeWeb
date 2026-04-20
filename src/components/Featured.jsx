import "./Featured.css";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <section className="featured">
      <h2>Featured Collection</h2>

      <div className="scroll-container">
        <div className="card">
          <div className="image-box">
            <img src="/sauvage.jpg" alt="Dior Sauvage" />
            <h3>Dior Sauvage</h3>
          </div>
          <p className="label">Fresh & Bold</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/libre.jpg" alt="Libre" />
            <h3>Libre</h3>
          </div>
          <p className="label">Elegant Floral</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/versaceeros.jpg" alt="Versace Eros" />
            <h3>Eros</h3>
          </div>
          <p className="label">Bold & Seductive </p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/tomford.jpg" alt="Tom Ford Black Orchid" />
            <h3>Black Orchid</h3>
          </div>
          <p className="label">Dark Luxury</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/borninroma.jpg" alt="Born in Roma" />
            <h3>Born in Roma</h3>
          </div>
          <p className="label">Modern Sweet</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/laviewestbelle.jpg" alt="La Vie Est Belle" />
            <h3>La Vie Est Belle</h3>
          </div>
          <p className="label">Sweet & Elegant</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/ysly.jpg" alt="YSL Y" />
            <h3>YSL Y</h3>
          </div>
          <p className="label">Clean Intense</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/chanelchance.jpg" alt="Chanel Chance" />
            <h3>Chanel Chance</h3>
          </div>
          <p className="label">Soft Chic</p>
          <Link to="/shop">
            <button>Add to Cart</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;