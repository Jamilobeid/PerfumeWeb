import "./Shop.css";
import { useEffect, useState } from "react"; 

function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5155/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="shop-page">
      <div className="shop-container">
        <h1>Our Collection</h1>
        <p>Discover timeless fragrances crafted to leave a lasting impression.</p>

        <div className="shop-topbar">
          <input type="text" placeholder="Search perfumes..." />
          <select>
            <option>All Categories</option>
            <option>Luxury Perfume</option>
            <option>Floral Perfume</option>
            <option>Fresh Perfume</option>
            <option>Classic Perfume</option>
          </select>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={`http://localhost:5155${product.image}`} alt={product.name} />
              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.category}</p>
                <span>${product.price}</span>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;