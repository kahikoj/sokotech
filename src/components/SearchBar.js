import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";
import ProductList from "./ProductsList";

const KEYS_TO_FILTERS = ["name"];

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );

  return (
    <div>
      <SearchInput
        className="search-input"
        onChange={setSearchTerm}
        placeholder="Search for a product..."
      />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default SearchBar;
