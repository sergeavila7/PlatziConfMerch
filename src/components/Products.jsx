import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Products.scss';

const Products = () => {
  const { products, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
