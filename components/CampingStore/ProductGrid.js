/**
 **
 */
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
};

export default ProductGrid;
