import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title.slice(0, 40)}...</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
