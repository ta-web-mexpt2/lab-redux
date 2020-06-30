import axios from "axios";

// Get all Carts
export const getCarts = () => {
    return axios.get("http://localhost:4000/carts");
};

// Get a Card with items
export const getCart = (cartId) => {
    return axios.get(`http://localhost:4000/carts/${cartId}`);
};

// Get a Card with items
export const getCartItems = (cartId) => {
    return axios.get(`http://localhost:4000/carts/${cartId}/items`);
};

// Post New Cart
export const postCart = (cart) => {
    return axios.post("http://localhost:4000/carts", cart);
};

// Add item to Cart
export const addItemRequest = (item) => {
    return axios.post(`http://localhost:4000/carts/${item.cartId}/items`, item);
};

// Remove item
export const removeItemRequest = (itemId) => {
    return axios.delete(`http://localhost:4000/items/${itemId}`);
}