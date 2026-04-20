import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import CartSidebar from "./components/CartSidebar";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const clearCart = () => {
  setCart([]);
  };
  return (
    <div className="app-layout">
      <Header cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
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