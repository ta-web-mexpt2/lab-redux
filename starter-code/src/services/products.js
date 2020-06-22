import axios from "axios";

export const getProducts = () => {
    return axios.get("http://localhost:4000/products");
};

export const postProduct = (product) => {
    return axios.post("http://localhost:4000/products", product);
};

export const deleteProductRequest = (productId) => {
    return axios.delete(`http://localhost:4000/products/${productId}`);
};