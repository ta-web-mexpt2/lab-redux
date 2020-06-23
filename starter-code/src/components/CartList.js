import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkIfEmptyOject, denormalizeCartsData } from "../utils";
import { removeItem } from "../redux/EcomerceDucks";
import NewItemForm from "./NewItemForm";

const CartList = () => {
  const dispatch = useDispatch();
  const { carts, cartsLoading, cartsError } = useSelector((state) => state);
  const emptyCarts = checkIfEmptyOject(carts);

  console.log(carts);
  return (
    <div>
      {cartsLoading && <h2>Loading Carts...</h2>}
      {cartsError && <h3>{cartsError}</h3>}
      {carts &&
        !emptyCarts &&
        denormalizeCartsData(carts).map((cart) => (
          <div>
            <br />
            <br />
            <li key={cart.id}>
              Id: {cart.id} - Items: {cart.items ? cart.items.length : 0} - $
              {cart.total} ....
              <NewItemForm cartId={cart.id} />
              <br />
              {cart.items &&
                cart.items.map((item) => (
                  <div key={item.id}>
                    <div>Product: {item.productId}</div>
                    <div>Quantity: {item.quantity}</div>
                    <button onClick={() => dispatch(removeItem(item))}>
                      Remove
                    </button>
                  </div>
                ))}
            </li>
          </div>
        ))}
    </div>
  );
};

export default CartList;
