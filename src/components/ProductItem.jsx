import { useDispatch } from "react-redux";
import { removeProduct } from "../store/productsSlice";

export const ProductItem = (props) => {
  const { id, name, price } = props.Product;
  const dispatch = useDispatch();
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <li>
      {`${name} $${price}  `}
      <button onClick={() => handleRemoveProduct(id)}>Remove</button>
    </li>
  );
};
