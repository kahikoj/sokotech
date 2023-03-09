import React, { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import ProductList from './ProductsList';
import Products from './Products';

const Inventory = () => {
  const [category, setCategory] = useState('');
  const filteredProducts = Products.filter(product => product.category === category);

  return (
    <div>
      <h1>Inventory</h1>
      <FormControl>
        <Select value={category} onChange={e => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
        </Select>
      </FormControl>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Inventory;
