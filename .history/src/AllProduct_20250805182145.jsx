import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './ProductDetail.css'; // optional styling

const ProductDetail = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://mediatracker-dp6t.onrender.com/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page">
      <div className="back-btn" onClick={() => navigate(-1)}>← Back</div>
      <h2>{product.name}</h2>
      <img src={product.imageUrls} alt={product.name} style={{ maxWidth: '300px' }} />
      <p><strong>Gender:</strong> {product.mainSection}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Subcategory:</strong> {product.subcategory}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Priority:</strong> {product.priority}</p>
    </div>
  );
};

export default ProductDetail;
