import React from 'react';

const ProductCard = ({ name, price, status }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ${price}</p>
      <p className="product-status">
        Status: <span className={status === 'In Stock' ? 'in-stock' : 'out-of-stock'}>
          {status}
        </span>
      </p>
    </div>
  );
};

export default ProductCard;