import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Midnight Oud",
    category: "Luxury Perfume",
    price: 120,
    image: "/midnightoud.jpg",
  },
  {
    id: 2,
    name: "Golden Bloom",
    category: "Floral Perfume",
    price: 95,
    image: "/goldenbloom.jpg",
  },
  {
    id: 3,
    name: "Velvet Rose",
    category: "Classic Perfume",
    price: 110,
    image: "/velvetrose.jpg",
  },
  {
    id: 4,
    name: "Mystic Noir",
    category: "Evening Perfume",
    price: 130,
    image: "/mysticnoir.jpg",
  },
  {
    id: 5,
    name: "Ocean Whisper",
    category: "Fresh Perfume",
    price: 90,
    image: "/oceanwhisper.jpg",
  },
  {
    id: 6,
    name: "Royal Amber",
    category: "Warm Perfume",
    price: 140,
    image: "/royalamber.jpg",
  },
  {
    id: 7,
    name: "Acqua Di Gio",
    category: "Warm Perfume",
    price: 135,
    image: "/acquadigio.jpg",
  },
  {
    id: 8,
    name: "Armani Code",
    category: "Warm Perfume",
    price: 190,
    image: "/armanicode.jpg",
  },
  {
    id: 9,
    name: "Azzaro Wanted",
    category: "Warm Perfume",
    price: 90,
    image: "/azzarowanted.jpg",
  },
  {
    id: 10,
    name: "Black Opium",
    category: "Warm Perfume",
    price: 160,
    image: "/blackopium.jpg",
  },
  {
    id: 11,
    name: "Born in Roma",
    category: "Warm Perfume",
    price: 110,
    image: "/borninroma.jpg",
  },
  {
    id: 12,
    name: "Bleu De Chanel",
    category: "Warm Perfume",
    price: 180,
    image: "/bluedechanel.jpg",
  },
  {
    id: 13,
    name: "Chanel Chance",
    category: "Warm Perfume",
    price: 120,
    image: "/chanelchance.jpg",
  },
  {
    id: 14,
    name: "Creed Aventus",
    category: "Warm Perfume",
    price: 300,
    image: "/creedaventus.jpg",
  },
  {
    id: 15,
    name: "Le Parfum",
    category: "Warm Perfume",
    price: 110,
    image: "/eliesaab.jpg",
  },
  {
    id: 16,
    name: "Good Girl",
    category: "Warm Perfume",
    price: 145,
    image: "/goodgirl.jpg",
  },
  {
    id: 17,
    name: "la Vie Est Belle",
    category: "Warm Perfume",
    price: 175,
    image: "/laviewestbelle.jpg",
  },
  {
    id: 18,
    name: "YSL Libre",
    category: "Warm Perfume",
    price: 190,
    image: "/libre.jpg",
  },
  {
    id: 19,
    name: "Miss Dior",
    category: "Warm Perfume",
    price: 100,
    image: "/misssdior.jpg",
  },
  {
    id: 20,
    name: "Dior Sauvage",
    category: "Warm Perfume",
    price: 145,
    image: "/sauvage.jpg",
  },
  {
    id: 21,
    name: "Black Orchid",
    category: "Warm Perfume",
    price: 200,
    image: "/tomford.jpg",
  },
  {
    id: 22,
    name: "Versace Eros",
    category: "Warm Perfume",
    price: 95,
    image: "/versaceeros.jpg",
  },
  {
    id: 23,
    name: "Xerjoff Naxos",
    category: "Warm Perfume",
    price: 300,
    image: "/xerjkoffnaxos.jpg",
  },
  {
    id: 24,
    name: "YSL Y",
    category: "Warm Perfume",
    price: 155,
    image: "/ysly.jpg",
  },
];

function Shop({ addToCart }) {
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
              <img src={product.image} alt={product.name} />
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