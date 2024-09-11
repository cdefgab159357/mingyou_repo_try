import React from 'react';

const ProductCard = ({ image, badge, price, title, description }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        <img src={badge} alt="" className="product-badge" />
        <div className="product-price">${price}</div>
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <button className="buy-button">立即選購</button>
    </article>
  );
};

export default ProductCard;
