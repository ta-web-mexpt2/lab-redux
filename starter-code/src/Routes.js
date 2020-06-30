import React from "react";
import { Switch, Route } from "react-router-dom";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <CartList />
        </Route>
        <Route exact path="/products">
            <ProductForm />
            <ProductList />
        </Route>
    </Switch>
);

export default Routes;