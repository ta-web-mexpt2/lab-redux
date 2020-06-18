import axios from "axios";
import { normalizeData } from "../utils";

//Action types

const LOADING = "reduxlab/products/LOADING";

const GET_PRODUCTS_SUCCESS = "reduxlab/products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "reduxlab/products/GET_PRODUCTS_ERROR";
const CREATE_PRODUCT = "reduxlab/products/CREATE_PRODUCT";

//initail state

const initialState = {
  loading: false,
  results: {},
  error: null,
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        results: normalizeData(action.payload),
        loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        results: [...state.results, action.payload],
      };
    default:
      return state;
  }
}

//Action creators (devuelve un objeto)

export const loadingProducts = () => ({
  type: LOADING,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  error,
});

export const createProduct = (payload) => ({
  type: CREATE_PRODUCT,
  payload,
});

//Thunk (devuelve una funcion)

export const getProducts = () => (dispatch) => {
  dispatch(loadingProducts());

  axios
    .get("http://localhost:4000/products")
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch((res) => {
      dispatch(getProductsError(res.response.data));
    });
};
