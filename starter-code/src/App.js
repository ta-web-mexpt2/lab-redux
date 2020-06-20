import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { loadProducts, loadCarts } from "./redux/EcomerceDucks";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadCarts());
  }, [dispatch]);

  return (
    <div className="App">
      <section>
        <ProductForm />
        <ProductList />
      </section>
      <section>
        <CartList />
      </section>
    </div>
  );
}

export default App;
