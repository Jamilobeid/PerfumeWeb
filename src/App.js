import { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import CartSidebar from "./components/CartSidebar";
import Checkout from './pages/Checkout';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5155/api/cart", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(error => console.log(error));
  }, []);

  const addToCart = (product) => {
    fetch(`http://localhost:5155/api/cart/${product.id}`, {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCart(data));
  };

  const removeFromCart = (indexToRemove) => {
    const productId = cart[indexToRemove].id;

    fetch(`http://localhost:5155/api/cart/${productId}`, {
      method: "DELETE",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCart(data));
  };

  const clearCart = () => {
    fetch("http://localhost:5155/api/cart", {
      method: "DELETE",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setCart(data));
  };

  return (
    <div className="app-layout">
      <Header cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </main>

      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <Footer />
    </div>
  );
}

export default App;