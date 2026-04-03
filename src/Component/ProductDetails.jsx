import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import './ProductDetails.css';

const ProductDetails = () => {
  const product = useLoaderData();

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-image-box">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div className="details-content">
          <h1>{product.title}</h1>
          <p className="details-description">{product.description}</p>

          <div className="details-info">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
          </div>

          <div className="details-tags">
            {product.tags?.map((tag, index) => (
              <span key={index} className="details-tag">
                {tag}
              </span>
            ))}
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;