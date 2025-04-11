import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}

      {orderPlaced && (
        <div className="order-popup">Order placed successfully!</div>
      )}
    </div>
  );
};

export default Cart;
