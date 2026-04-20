import "./CartSidebar.css";

function CartSidebar({ cart, isOpen, closeCart, removeFromCart, clearCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    alert(`Order placed! Total: $${total}`);

    clearCart();
    closeCart();
  };

  return (
    <div className={`cart-overlay ${isOpen ? "open" : ""}`}>
      <div className="cart-sidebar">
        
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={closeCart}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
            <h3>Total: ${total}</h3>
          <button
                className="checkout-btn"
                onClick={() => handleCheckout()}
                >
                Checkout
            </button>
        </div>

      </div>
    </div>
  );
}

export default CartSidebar;