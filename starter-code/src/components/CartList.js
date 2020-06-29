import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkIfEmptyOject, denormalizeCartsData } from "../utils";
import { removeItem } from "../redux/EcomerceDucks";
import NewItemForm from "./NewItemForm";
import Card from "./Card";
import ItemCard from "./ItemCard";
import CardsContainer from "./CardsContainer";

const CartList = () => {
  const dispatch = useDispatch();
  const { carts, cartsLoading, cartsError } = useSelector((state) => state);
  const emptyCarts = checkIfEmptyOject(carts);

  return (
    <CardsContainer>
      {cartsLoading && <h2>Loading Carts...</h2>}
      {cartsError && <h3>{cartsError}</h3>}
      {carts &&
        !emptyCarts &&
        denormalizeCartsData(carts).map((cart) => (
          <Card key={cart.id}>
            <br />
            <div>
              <h3> Id: {cart.id} - Items: {cart.items ? cart.items.length : 0} - $
              {cart.total}</h3>
              <NewItemForm cartId={cart.id} />
              <br />
              {cart.items &&
                cart.items.map((item) => (
                  <ItemCard key={item.id}>
                    <div>Product: {item.product}</div>
                    <div>Quantity: {item.quantity}</div>
                    <div>Subtotal: ${item.subtotal}</div>
                    <button onClick={() => dispatch(removeItem(item))}>
                      Remove
                    </button>
                  </ItemCard>
                ))}
            </div>
          </Card>
        ))}
    </CardsContainer>
  );
};

export default CartList;
