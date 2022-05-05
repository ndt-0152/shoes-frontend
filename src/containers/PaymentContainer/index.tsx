import React from 'react';

export const PaymentContainer: React.FC = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center login-center">
      <form className="Login2 col-md-8 col-lg-4 col-11">
        <h6>SELECT PAYMENT METHOD</h6>
        <div className="payment-container">
          <div className="radio-container">
            <input className="form-check-input" type="radio" value="PayPal" />
            <label className="form-check-label">PayPal or Credit Card</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentContainer;
