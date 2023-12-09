import React from "react";
import EditProduct from "../components/Products/EditProduct";

const ProductPage = () => {
  return (
    <>
      <div className="px-4">
        <h2 className="text-4xl font-semibold text-center mb-6">Products</h2>
        <EditProduct />
      </div>
    </>
  );
};

export default ProductPage;
