import React, { useState } from "react";
import { useGetProductQuery } from "../api/productSlice";

function SearchProduct() {
  const [search, setSearch] = useState("");
  const { data: singleProduct, isSuccess } = useGetProductQuery(search);

  const searchResults = singleProduct?.products;

  return (
    <div>
      <input
        type="search"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isSuccess && searchResults.map((result) => <p>{result.title}</p>)}
    </div>
  );
}

export default SearchProduct;
