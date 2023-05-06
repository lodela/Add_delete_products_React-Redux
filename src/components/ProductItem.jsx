import { useDispatch } from "react-redux";
import { removeProduct } from "../store/productsSlice";

export const ProductItem = (product) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = (id) => dispatch(removeProduct(id));
  return (
    <li>
      {product.name}{" "}
      <button onClick={handleRemoveProduct(product.id)}>Remove</button>
    </li>
  );
};
