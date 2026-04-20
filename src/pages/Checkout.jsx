import "./Checkout.css";

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form-section">
          <h1>Checkout</h1>
          <form className="checkout-form">
            <input type="text" placeholder="Full Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Address" />
            <textarea placeholder="Order Notes" rows="5"></textarea>
            <button type="submit">Place Order</button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="summary-item">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))
          )}
          <h3>Total: ${total}</h3>
        </div>
      </div>
    </section>
  );
}

export default Checkout;