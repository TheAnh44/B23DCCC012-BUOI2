// src/components/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductList({ products, deleteProduct }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h>Danh Sách Hàng Hóa</h>
      <input 
        type="text" 
        placeholder="Tìm kiếm hàng hóa..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <ul className="list-group">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy hàng hóa nào!</p>
        ) : (
          filteredProducts.map((product, index) => (
            <li key={index} className="list-group-item">
              {product.name} - {product.price} VNĐ
              <div>
                <Link to={`/edit/${index}`}>
                  <button className="btn-primary">Sửa</button>
                </Link>
                <button onClick={() => deleteProduct(index)} className="btn-danger">Xóa</button>
              </div>
            </li>
          ))
        )}
      </ul>
      <Link to="/add">
        <button className="btn-success">Thêm Hàng Hóa</button>
      </Link>
      <Link to="/">
        <button className="btn-secondary2">Quay Lại Trang Chính</button>
      </Link>
    </div>
  );
}

export default ProductList;
