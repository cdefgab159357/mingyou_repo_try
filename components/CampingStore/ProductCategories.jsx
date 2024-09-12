/**
 **
 */
import React from "react";

const ProductCategories = () => {
  return (
    <nav className="product-categories navigation">
    <ul>
    <li>
      <a href="#discounts" className="category-link category-link-active">
        優惠商品
      </a>
    </li>
    <li>
      <a href="#recommended" className="category-link">
        推薦商品
      </a>
      </li>
      <li>
      <a href="#bestsellers" className="category-link">
        熱銷商品
      </a>
      </li>
      <li>
      <a href="#clearance" className="category-link">
        出清商品
      </a>
      </li>
      </ul>
    </nav>
  );
};

export default ProductCategories;
