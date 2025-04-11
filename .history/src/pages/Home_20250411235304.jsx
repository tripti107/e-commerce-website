import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../styles/home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const url = filter
      ? `https://fakestoreapi.com/products/category/${filter}`
      : `https://fakestoreapi.com/products`;

    const res = await axios.get(url);
    setProducts(res.data);
  };

  const fetchCategories = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/categories`);
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="filters">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
