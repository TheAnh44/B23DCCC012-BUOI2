
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const updateProduct = (index, updatedProduct) => {
    const newProducts = [...products];
    newProducts[index] = updatedProduct;
    setProducts(newProducts);
  };

  return (
    <Router>
      <div className="App">
        <h1>Quản Lý Sản Phẩm</h1>
        <Routes>
          <Route path="/" element={<ProductList products={products} deleteProduct={deleteProduct} />} />
          <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
          <Route path="/edit/:id" element={<EditProduct products={products} updateProduct={updateProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
