import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/productsSlice";
import { idGenerator } from "./GenerateNewId";

function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const id = idGenerator();
    dispatch(addProduct({ id, name: `Product: ${id}`, price: 30 }));
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Products</h2>
      <button className="addProduct" onClick={() => handleAddProduct()}>
        Add Product
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} : {product.price}
            <button onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
