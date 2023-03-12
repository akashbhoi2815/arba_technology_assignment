import * as types from "./actionTypes";

const initialState = {
  token: "",
  isAuth: false,
  user: null,
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
    case types.REGISTER_USER_REQUEST:
      return {
        isLoading: true,
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };

    case types.LOGOUT_SUCCESS:
      return {
        isLoading: false,
        token: "",
        isAuth: false,
      };
    case types.LOGIN_FAIL:
    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: "",
        isError: payload,
      };
    case types.LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: payload,
      };
    default:
      return state;
  }
};
