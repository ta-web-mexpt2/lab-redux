import axios from "axios";

export const getProducts = () => {
    return axios.get("http://localhost:4000/products");
};

export const postProduct = (item) => {
    return axios.post("http://localhost:4000/products");
}