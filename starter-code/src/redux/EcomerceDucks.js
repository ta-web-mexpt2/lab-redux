// Imports
import {
  getProducts,
  postProduct,
  deleteProductRequest,
} from "../services/products";
import {
  getCarts,
  getCartItems,
  postCart,
  putCart,
  addItemRequest,
  removeItemRequest,
} from "../services/carts";
import {
  normalizeProductsData,
  denormalizeProductsData,
  normalizeCartsData,
  denormalizeCartsData,
} from "../utils";
import {} from "react-dom/test-utils";

// Actions
const LOADING_PRODUCTS = "lab-redux/products/LOADING_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "lab-redux/products/GET_PRODUCTS_SUCCESS";
const CREATE_PRODUCT_SUCESS = "lab-redux/products/CREATE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_SUCCESS = "lab-redux/products/DELETE_PRODUCT_SUCCESS";
const PRODUCTS_ERROR = "lab-redux/products/PRODUCTS_ERROR";

const LOADING_CARTS = "lab-redux/carts/LOADING_CARTS";
const GET_CARTS_SUCCESS = "lab-redux/carts/GET_CARTS_SUCCESS";
const CREATE_CART_SUCCESS = "lab-redux/carts/CREATE_CART_SUCCESS";
const UPDATE_CART_SUCCESS = "lab-redux/carts/UPDATE_CART_SUCCESS";
const ADD_ITEM_SUCCESS = "lap-redux/carts/ADD_ITEM_SUCCESS";
const REMOVE_ITEM_SUCCESS = "lab-redux/carts/REMOVE_ITEM_SUCCESS";
const CARTS_ERROR = "lab-redux/carts/CARTS_ERROR";

// State
const initState = {
  products: {},
  productsLoading: false,
  productsError: undefined,
  carts: {},
  cartsLoading: false,
  cartsError: undefined,
  newCart: {},
};

// Reducer
export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return { ...state, productsLoading: true, productsError: undefined };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: normalizeProductsData(action.payload),
        productsLoading: false,
        productsError: undefined,
      };

    case CREATE_PRODUCT_SUCESS:
      return {
        ...state,
        products: { ...state.products, [action.payload.id]: action.payload },
        productsLoading: false,
        productsError: undefined,
      };

    case DELETE_PRODUCT_SUCCESS:
      let newProds = state.products;
      delete newProds[action.payload];
      return {
        ...state,
        products: newProds,
        productsLoading: false,
        productsError: undefined,
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        productsLoading: false,
        productsError: action.payload,
      };

    case LOADING_CARTS:
      return { ...state, cartsLoading: true, cartsError: undefined };

    case GET_CARTS_SUCCESS:
      return {
        ...state,
        carts: normalizeCartsData(action.payload),
        cartsLoading: false,
        cartsError: undefined,
      };

    case CREATE_CART_SUCCESS:
      return {
        ...state,
        carts: [...state.carts, action.payload],
        cartsLoading: false,
        cartsError: undefined,
      };

    case UPDATE_CART_SUCCESS:
      const cartsUpdated = state.carts;
      cartsUpdated[action.payload.id] = action.payload;
      return {
        ...state,
        carts: cartsUpdated,
        cartsLoading: false,
        cartsError: undefined,
      };

    case ADD_ITEM_SUCCESS:
      // El payload trae el item (id, quantity, productId, cartId)
      const cartsItemAdded = state.carts;
      const cartToAdd = cartsItemAdded[action.payload.cartId];
      cartToAdd.items = [...cartToAdd.items, action.payload];
      cartsItemAdded[action.payload.cartId] = cartToAdd;
      return {
        ...state,
        carts: cartsItemAdded,
        cartsLoading: false,
        cartsError: undefined,
      };

    case REMOVE_ITEM_SUCCESS:
      // El payload trae el item (id, quantity, productId, cartId)
      const cartsItemRemoved = state.carts;
      const cartToRemove = cartsItemRemoved[action.payload.cartId];
      cartToRemove.items = cartToRemove.items.filter(
        (item) => item.id !== action.payload.id
      );
      cartsItemRemoved[action.payload.cartId] = cartToRemove;
      return {
        ...state,
        carts: cartsItemRemoved,
        cartsLoading: false,
        cartsError: undefined,
      };

    case CARTS_ERROR:
      return { ...state, cartsLoading: false, cartsError: action.payload };

    default:
      return state;
  }
}

// Action Creators
export const loadingProducts = (payload) => ({
  type: LOADING_PRODUCTS,
  payload,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const createProductSuccess = (payload) => ({
  type: CREATE_PRODUCT_SUCESS,
  payload,
});

export const deleteProductSucess = (payload) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload,
});

export const productsError = (payload) => ({
  type: PRODUCTS_ERROR,
  payload,
});

export const loadingCarts = (payload) => ({
  type: LOADING_CARTS,
  payload,
});

export const getCartsSuccess = (payload) => ({
  type: GET_CARTS_SUCCESS,
  payload,
});

export const createCart = (payload) => ({
  type: CREATE_CART_SUCCESS,
  payload,
});

export const updateCart = (payload) => ({
  type: UPDATE_CART_SUCCESS,
  payload,
});

export const addCartItem = (payload) => ({
  type: ADD_ITEM_SUCCESS,
  payload,
});

export const removeCartItem = (payload) => ({
  type: REMOVE_ITEM_SUCCESS,
  payload,
});

export const cartsError = (payload) => ({
  type: CARTS_ERROR,
  payload,
});

// Thunks
export const loadProducts = () => {
  return (dispatch) => {
    dispatch(loadingProducts());
    getProducts()
      .then((response) => {
        dispatch(getProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(productsError(error.toString()));
      });
  };
};

export const loadCarts = () => {
  return (dispatch) => {
    dispatch(loadingCarts());
    getCarts()
      .then(async (response) => {
        const carts = response.data;

        // Para usar un .map con un await dentro:
        // https://flaviocopes.com/javascript-async-await-array-map/

        const getItemsAsyncFn = async (oneCart) => {
          // Hasta aquí el resultado es una promesa
          return getCartItems(oneCart.id);
        };

        // Regresa una promesa por tener async, como lo espera el .all
        const bundleCartAndItems = async (getItemsAuxAsyncFn, oneCart) => {
          return new Promise((resolve, reject) => {
            // Al ejecutarse el .then de la función principal, ejecuta el .then de la fn auxiliar
            getItemsAuxAsyncFn.then((itemArrayResp) => {
              //console.log(itemArrayResp);
              // Ya que se tienen los datos "auxiliares" se arma la respuesta principal
              resolve({ ...oneCart, items: itemArrayResp.data });
            }).catch(error => reject(error));
          });
        };

        // Se "forman" las promesas, listas para aplicar el .all
        return Promise.all(
          carts.map((cart) => bundleCartAndItems(getItemsAsyncFn(cart), cart))
        ).then((response) => {
          // Aquí ya se tienen los resultados de las consultas
          // console.log(response);
          dispatch(getCartsSuccess(response));
        });
      })
      .catch((error) => dispatch(cartsError(error.toString())));
  };
};

export const createProduct = (product) => {
  return (dispatch) => {
    postProduct(product)
      .then((response) => {
        const payload = response.data;
        console.log(response.data);
        dispatch(createProductSuccess(payload));
      })
      .catch((error) => dispatch(productsError(error.toString())));
  };
};

export const deleteProduct = (product_id) => {
  return (dispatch) => {
    deleteProductRequest(product_id)
      .then((response) => {
        dispatch(deleteProductSucess(product_id));
      })
      .catch((error) => {
        debugger;
        dispatch(productsError(error.toString()));
      });
  };
};

export const removeItem = (item) => {
  return (dispatch) => {
    removeItemRequest(item.id).then(response => {
      dispatch(removeCartItem(item));
    }).catch(error => dispatch(cartsError(error.toString())));
  }
};

export const addItem = (item) => {
  return (dispatch) => {
    addItemRequest(item).then(response => {
      dispatch(addCartItem(response.data));
    }).catch(error => dispatch(cartsError(error.toString())));
  }
}
