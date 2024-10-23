// src/components/EditProduct.js
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './styles.css';

function EditProduct({ products, updateProduct }) {
  const { id } = useParams();
  const product = products[id];
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const navigate = useNavigate();

  const handleUpdateProduct = () => {
    const updatedProduct = { name: productName, price: productPrice };
    updateProduct(id, updatedProduct);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Sửa Hàng Hóa</h2>
      <input 
        type="text" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        value={productPrice} 
        onChange={(e) => setProductPrice(e.target.value)} 
      />
      <div>
        <button onClick={handleUpdateProduct} className="btn-secondary1">Cập Nhật</button>
        <Link to="/">
          <button className="btn-secondary2">Quay Lại</button>
        </Link>
      </div>
    </div>
  );
}

export default EditProduct;
