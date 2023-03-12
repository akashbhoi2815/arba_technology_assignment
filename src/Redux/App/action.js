import * as types from "./actionTypes";

export const getData = (limit) => (dispatch) => {
  dispatch({ type: types.GET_REQUEST });
  return fetch(`https://fakestoreapi.com/products/?limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {

      return dispatch({ type: types.GET_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: types.GET_FAILURE, payload: error });
    });
};

export const addToCart = (id, quantity) => (dispatch,getState) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.ADD_CART,
        payload: {
         ...data,
          quantity:quantity
        },
      });
      localStorage.setItem("cartItems",JSON.stringify(getState().appReducer.cart))
    });
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: types.REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().appReducer.cart));
};