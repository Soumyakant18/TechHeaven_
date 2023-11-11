import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './CheckoutPage.css';

const CheckoutPage = ({ cart, totalCost, clearCart }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    // Simulate a payment request
    // In a real-world scenario, you would integrate with a payment gateway
    // and perform server-side verification before marking the payment as successful
    try {
      // Simulate an asynchronous payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Payment successful
      setPaymentSuccess(true);
      // Additional logic (e.g., clear the cart)
      clearCart();
    } catch (error) {
      // Handle payment failure
      console.error('Payment failed:', error);
      setPaymentSuccess(false);
    }
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <h1>Checkout</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.name} - RS {item.price}</li>
            ))}
          </ul>
        )}
        <p>Total Cost: RS {totalCost}</p>
      </div>

      {paymentSuccess ? (
        <div className="payment-success">
          <p>Payment successful! Thank you for your purchase.</p>
        </div>
      ) : (
        <div className="payment-section">
          <button className="pay-now-button" onClick={handlePayment}>
            Pay Now
          </button>
          <p className="payment-instructions">Click "Pay Now" to complete your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
