import React, { useEffect } from 'react';
import './ReturnAndRefundPolicy.css';

const ReturnAndRefundPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
   <>
    <div className="return-refund-policy-container">
      <div className="header">
        <h1>Return & Refund Policy for Zens Health Care</h1>
      </div>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          Thank you for shopping at Zens Health Care. If you are not entirely satisfied with your purchase, we're here to help.
        </p>
      </div>

      <div className="section">
        <h2>Returns & Refunds</h2>
        <p>
          We do not have a return policy for most products. However, returns are only valid if you receive the wrong product. Once the incorrect product is received back, we will initiate your refund within 7 working days, credited to your respective bank account.
        </p>
      </div>

      {/* <div className="section">
        <h2>Refunds</h2>
        <p>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain number of days, depending on your card issuer's policies.
        </p>
      </div> */}

      <div className="section">
        <h2>Shipping</h2>
        <p>
          All Product Will Deliver within 7 Working days.By Recpective Delivery Partner.
        </p>
      </div>

      <div className="section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions on how to return your item to us, contact us at support@zenshealthcare.com.
        </p>
      </div>
    </div>
    <hr />
   </>
  );
};

export default ReturnAndRefundPolicy;
