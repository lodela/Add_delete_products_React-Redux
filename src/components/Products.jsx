import { useDispatch, useSelector } from "react-redux";
import { setProducts, addProduct } from "../store/productsSlice";
import idGenerator from "./GenerateNewId";
import { useEffect, useState } from "react";

import { ProductItem } from "./ProductItem";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(
      setProducts([
        { id: 1, name: "product 1" },
        { id: 2, name: "product 2" },
        { id: 2, name: "product 2" },
      ])
    );
    setId(idGenerator());
  }, [dispatch]);

  const handleAddProduct = () => {
    dispatch(addProduct({ id, name: `Nuevo producto: ${id}` }));
  };
  return (
    <div className="productList">
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          <ProductItem key={product.id} product={product} />;
        })}
      </ul>
      <button onClick={() => handleAddProduct()}>Add Product</button>
    </div>
  );
};
