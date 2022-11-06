import React, { useMemo } from "react";
import { useGetAllProductsQuery } from "../api/productSlice";

function ProductView() {
  const { data: allProducts, isFetching, isSuccess } = useGetAllProductsQuery();

  const products = allProducts?.products;
  //   console.log(products);
    
  return (
    <div>
      <h2>Products</h2>
      {isFetching && <div>Loading...</div>}
      {isSuccess &&
        products?.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  );
}

export default ProductView;
