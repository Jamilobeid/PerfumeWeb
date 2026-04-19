import "./Featured.css";

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
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/libre.jpg" alt="Libre" />
            <h3>Libre</h3>
          </div>
          <p className="label">Elegant Floral</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/versaceeros.jpg" alt="Versace Eros" />
            <h3>Eros</h3>
          </div>
          <p className="label">Bold & Seductive </p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/tomford.jpg" alt="Tom Ford Black Orchid" />
            <h3>Black Orchid</h3>
          </div>
          <p className="label">Dark Luxury</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/borninroma.jpg" alt="Born in Roma" />
            <h3>Born in Roma</h3>
          </div>
          <p className="label">Modern Sweet</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/laviewestbelle.jpg" alt="La Vie Est Belle" />
            <h3>La Vie Est Belle</h3>
          </div>
          <p className="label">Sweet & Elegant</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/ysly.jpg" alt="YSL Y" />
            <h3>YSL Y</h3>
          </div>
          <p className="label">Clean Intense</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <div className="image-box">
            <img src="/chanelchance.jpg" alt="Chanel Chance" />
            <h3>Chanel Chance</h3>
          </div>
          <p className="label">Soft Chic</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;