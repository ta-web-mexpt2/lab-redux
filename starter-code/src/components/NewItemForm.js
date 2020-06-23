import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/EcomerceDucks";
import { checkIfEmptyOject } from "../utils";

const NewItemForm = (props) => {

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({cartId: props.cartId});

  const handleChange = async (e) => {
    // Tener en cuenta que setInputs es asyncrono
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // Y el log regresa un estado antes porque se ejecuta previo a que se termine de actualizar el valor:
    // console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIfEmptyOject(inputs)) {
      dispatch(addItem(inputs));
      document.getElementById(`newItemForm${props.cartId}`).reset();
      setInputs({});
    }
  };

  return (
    <div type="form">
      <form id={`newItemForm${props.cartId}`} onSubmit={handleSubmit}>
        {/* htmlFor --> se basa en el id */}
        <label htmlFor="productId">Product Id:</label>
        <input
          type="text"
          placeholder="Product Id"
          id="productId"
          name="productId"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" onChange={handleChange} />
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default NewItemForm;
