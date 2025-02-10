import React from "react";
import "../App.css"; // Ensure global styles are applied

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <h1>Return & Refund Policy</h1>
      <p className="last-updated"><strong>Last Updated:</strong> February 10, 2025</p>

      <p>
        Thank you for shopping at <strong>The Box of Rocks</strong>. Due to the nature of our product, 
        <strong> all sales are final</strong>?we <strong>do not accept returns, refunds, or exchanges</strong> 
        for any reason.
      </p>

      
      <p>
      <h2>No Returns or Exchanges</h2>
        It's <strong>literally a box of rocks</strong>?what you see is what you get. Once purchased, the order 
        <strong> cannot be returned or exchanged</strong>, even if you change your mind.
      </p>
      <p>Please double-check your order before completing your purchase.</p>

      
      <p>
      <h2>Damaged or Defective Products</h2>
        Our products are carefully packed, but if your box of rocks arrives looking more like a bag of gravel, 
        <strong> please reach out within 48 hours</strong> with your order number and photos.
      </p>
      <p>
        While we <strong>do not offer refunds</strong>, we?ll assess the situation and determine if a replacement 
        is appropriate.
      </p>

      
      <p>
      <h2>Order Cancellations</h2>
        Orders <strong>may be canceled</strong> up until the time a shipping label is created. Once a label 
        is generated, the order is considered final and <strong>can no longer be canceled or modified</strong>.
      </p>

      <h2>Contact Us</h2>
<p>
  <strong>Website:</strong>{" "}
  <a 
    href="https://theboxofrocks.com/contact" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "blue", fontWeight: "bold", textDecoration: "underline" }}
  >
    Contact Form
  </a>
</p>


      <p className="policy-footer">
        By purchasing from <strong>The Box of Rocks</strong>, you acknowledge and agree to this policy.
      </p>
    </div>
  );
};

export default ReturnPolicy;
