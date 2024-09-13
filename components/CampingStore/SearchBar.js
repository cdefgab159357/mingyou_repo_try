/**
 **
 */
import React from "react";

const Newsletter = () => {
  return (
    <section>
      <form className="newsletter-form">
        <label className="visually-hidden">
        </label>
        <input
          className="newsletter-input"
          placeholder="輸入搜尋關鍵字"
        />
        <button type="submit" className="newsletter-button">
          搜尋
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
