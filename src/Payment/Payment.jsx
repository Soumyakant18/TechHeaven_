import React from 'react';

function Payment() {
  return (
    <div className="payment-container">
      <h4>Payment Options</h4>
      <div className="card-container">
        <div className="card">
          <h5>Cash on delivery</h5>
          <p>Pay securely with Cash and trust</p>
          <button>Pay </button>
        </div>
        <div className="card">
          <h3>PayPal</h3>
          <p>Use PayPal for fast and secure payments.</p>
          <button>Pay with PayPal</button>
        </div>
        <div className="card">
          <h3>Bank Transfer</h3>
          <p>Transfer funds directly from your bank account.</p>
          <button>Transfer Now</button>
        </div>
      </div>
      <style>
        {`
          .payment-container {
            max-width: 800px;
            margin: 100px auto;
          }

          .card-container {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }

          .card {
            width: 30%;
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }

          .card h3 {
            margin-top: 0;
          }

          .card p {
            margin-bottom: 15px;
          }

          .card button {
            padding: 10px 20px;
            background-color: orange;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .card button:hover {
            background-color: purple;
          }
        `}
      </style>
    </div>
  );
}

export default Payment;
