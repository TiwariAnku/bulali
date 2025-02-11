import React, { useState } from 'react';
import './Product.css';

function Products() {
  const [products] = useState([]);

//   useEffect(() => {
//     // Fetch product data from the backend
//     fetch('http://localhost:5000/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

  
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;
