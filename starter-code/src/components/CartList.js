import React from "react";
import { useSelector } from "react-redux";
import { checkIfEmptyOject, denormalizeCartsData } from "../utils";

const CartList = () => {

  const { carts, cartsLoading, cartsError } = useSelector(state => (state));
  const emptyCarts = checkIfEmptyOject(carts);
  return (
    <div>
      { cartsLoading && <h2>Loading Carts...</h2>}
      { cartsError && <h3>{cartsError}</h3> }
      {carts &&
        !emptyCarts &&
        denormalizeCartsData(carts).map((cart) => (
          <li key={cart.id}>
            Items: {cart.items.length} - ${cart.total}
            {cart.items && cart.items.map((item) =>
            <div>
                <div>Product: {item.productId}</div>
                <div>Quantity: {item.quantity}</div>
            </div>)}
          </li>
        ))}
    </div>
  );
};

export default CartList;
