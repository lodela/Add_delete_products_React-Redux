import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductList from "./components/ProductList";
export const App = () => {
  return (
    <Provider store={store}>
      <h1>Hola Mundo</h1>
      <ProductList />
    </Provider>
  );
};
