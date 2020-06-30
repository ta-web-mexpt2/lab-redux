import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/EcomerceDucks";
import { checkIfEmptyOject } from "../utils";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  const handleChange = async (e) => {
    // Tener en cuenta que setInputs es asyncrono
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // Y el log regresa un estado antes porque se ejecuta previo a que se termine de actualizar el valor:
    // console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkIfEmptyOject(inputs)) {
      dispatch(createProduct(inputs));
      document.getElementById("productForm").reset();
      setInputs({});
    }
  };

  return (
    <div type="form">
      <form id="productForm" onSubmit={handleSubmit}>
        {/* htmlFor --> se basa en el id */}
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          placeholder="Product description"
          id="description"
          name="description"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" onChange={handleChange} />
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
