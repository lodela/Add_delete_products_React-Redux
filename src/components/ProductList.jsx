import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/productsSlice";
import { idGenerator } from "./GenerateNewId";
import { ProductItem } from "./ProductItem";

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const id = idGenerator();
    dispatch(addProduct({ id, name: `Product: ${id}`, price: 30 }));
  };

  return (
    <div>
      <h2>Products</h2>
      <button className="addProduct" onClick={() => handleAddProduct()}>
        Add Product
      </button>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} Product={product} />
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
