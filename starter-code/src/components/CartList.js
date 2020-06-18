import React from "react";
import { checkIfEmptyOject } from "../utils";

const CartList = (props) => {
  console.log(props);
  const emptyCarts = checkIfEmptyOject(props.carts);
  return (
    <div>
      {props.carts &&
        !emptyCarts &&
        props.carts.map((cart) => (
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
