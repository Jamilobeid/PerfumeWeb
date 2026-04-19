import "./BestSellers.css";

function BestSellers() {
  return (
    <section className="best-sellers">
      <div className="divider2"></div>

      <h1 className="best-title">Our Best Sellers This Month</h1>

      <div className="best-sellers-container">
        
        <div className="best-sellers-side">
          <h2>Men</h2>

          <div className="perfume-item">
            <img src="/sauvage.jpg" alt="Men Perfume 1" />
            <p>Dior Sauvage</p>
          </div>

          <div className="perfume-item">
            <img src="/bluedechanel.jpg" alt="Men Perfume 2" />
            <p>Bleu de Chanel</p>
          </div>

          <div className="perfume-item">
            <img src="/acquadigio.jpg" alt="Men Perfume 3" />
            <p>Acqua di Gio</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="best-sellers-side">
          <h2>Women</h2>

          <div className="perfume-item">
            <img src="/misssdior.jpg" alt="Women Perfume 1" />
            <p>Miss Dior</p>
          </div>

          <div className="perfume-item">
            <img src="/blackopium.jpg" alt="Women Perfume 2" />
            <p>Black Opium</p>
          </div>

          <div className="perfume-item">
            <img src="/libre.jpg" alt="Women Perfume 3" />
            <p>Libre</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BestSellers;