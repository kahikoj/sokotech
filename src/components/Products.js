import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import ProductList from './ProductsList';

const Products = ({ products }) => {
  const [category, setCategory] = useState('');
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div>
      <h1>Products</h1>
      <FormControl>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </Select>
      </FormControl>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Products;
