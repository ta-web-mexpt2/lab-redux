import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { getProducts } from "./services/products";
import { getCarts } from "./services/carts";

function App() {
  const [products, setProducts] = useState({});
  const [carts, setCarts] = useState({});

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
    getCarts().then((res) => {
      setCarts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <ProductList products={products} />
      <CartList carts={carts} />
    </div>
  );
}

export default App;
