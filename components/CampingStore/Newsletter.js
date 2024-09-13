/**
 **
 */
import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest camping gear and exclusive offers!</p>
      <form className="newsletter-form">
        <label htmlFor="email-input" className="visually-hidden">
          Email address
        </label>
        <input
          type="email"
          id="email-input"
          className="newsletter-input"
          placeholder="Enter your email address"
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
