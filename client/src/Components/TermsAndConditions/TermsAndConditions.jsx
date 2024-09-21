import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
    <div className="terms-conditions-container">
      <div className="header">
        <h1>Terms and Conditions for Zens Health Care</h1>
      </div>

      <div className="section">
        <h2>Introduction</h2>
        <p>
          Welcome to Zens Health Care. These terms and conditions outline the rules and regulations for the use of Zens Health Care's Website.
        </p>
      </div>

      <div className="section">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use Zens Health Care if you do not agree to all of the terms and conditions stated on this page.
        </p>
      </div>

      <div className="section">
        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Zens Health Care, you agreed to use cookies in agreement with Zens Health Care's Privacy Policy.
        </p>
      </div>

      <div className="section">
        <h2>License</h2>
        <p>
          Unless otherwise stated, Zens Health Care and/or its licensors own the intellectual property rights for all material on Zens Health Care. All intellectual property rights are reserved. You may access this from Zens Health Care for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
      </div>

      <div className="section">
        <h2>User Comments</h2>
        <p>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Zens Health Care does not filter, edit, publish or review Comments prior to their presence on the website.
        </p>
      </div>

      <div className="section">
        <h2>Content Liability</h2>
        <p>
          We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website.
        </p>
      </div>

      <div className="section">
        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
    <hr />
    </>
  );
};

export default TermsAndConditions;
