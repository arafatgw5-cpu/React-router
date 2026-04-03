import React, { useEffect, useState } from 'react';
// import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading]=useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false)

      });
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">All Products</h1>
      {isLoading&& <p>Products Are Loading</p>}

      <section className="products-grid">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <article className="product-card" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />

                <div className="product-content">
                  <h2>{product.title}</h2>
                  <p className="description">{product.description}</p>

                  <div className="product-info">
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                    <p><strong>Rating:</strong> {product.rating}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Weight:</strong> {product.weight}g</p>
                    <p>
                      <strong>Dimensions:</strong>{" "}
                      {product.dimensions.width} x {product.dimensions.height} x{" "}
                      {product.dimensions.depth}
                    </p>
                    <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                    <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                    <p><strong>Status:</strong> {product.availabilityStatus}</p>
                    <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                    <p><strong>Minimum Order:</strong> {product.minimumOrderQuantity}</p>
                    <p><strong>Barcode:</strong> {product.meta.barcode}</p>
                    <p><strong>Created At:</strong> {product.meta.createdAt}</p>
                  </div>

                  <div className="tags">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="reviews">
                    <h3>Reviews</h3>
                    {product.reviews.map((review, index) => (
                      <div className="review-card" key={index}>
                        <p><strong>Name:</strong> {review.reviewerName}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Comment:</strong> {review.comment}</p>
                        <p><strong>Date:</strong> {review.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Products;