import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/EcomerceDucks";
import { checkIfEmptyOject, denormalizeProductsData } from "../utils";

const NewItemForm = (props) => {

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({cartId: props.cartId});

  const products = useSelector((state) => state.products);

  const handleChange = async (e) => {
    //console.log(e.target);
    // Tener en cuenta que setInputs es asyncrono
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // Y el log regresa un estado antes porque se ejecuta previo a que se termine de actualizar el valor:
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIfEmptyOject(inputs)) {
      dispatch(addItem(inputs));
      document.getElementById(`newItemForm${props.cartId}`).reset();
      setInputs({cartId: props.cartId});
    }
  };

  return (
    <div type="form">
      <form id={`newItemForm${props.cartId}`} onSubmit={handleSubmit}>
        {/* htmlFor --> se basa en el id */}
        <label htmlFor="productId">Product: </label>
        <select id="productId" name="productId" onChange={handleChange}>
          { products && !checkIfEmptyOject(products) && denormalizeProductsData(products).map(product => (
            <option key={product.id} value={product.id}>{`${product.description} - $${product.price}`}</option>
          )) }
        </select>
        <br />
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" id="quantity" name="quantity" onChange={handleChange} />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default NewItemForm;
