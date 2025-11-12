import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  const products = [
    {
      name: 'Wireless Mouse',
      price: '25.99',
      status: 'In Stock'
    },
    {
      name: 'Keyboard',
      price: '45.5',
      status: 'Out of Stock'
    },
    {
      name: 'Monitor',
      price: '199.99',
      status: 'In Stock'
    }
  ];

  return (
    <div className="app">
      <h1 className="title">Products List</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default App;