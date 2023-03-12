import * as types from "./actionTypes";

const cartdata = JSON.parse(localStorage.getItem("cartItems"))
|| []

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    cart:  cartdata,
}

export const appReducer = (state=initialState,{type,payload})=>{
   switch (type) {
    case types.GET_REQUEST:
        return {
            ...state,
            isLoading:true,
            isError:false,
        };
    case types.GET_SUCCESS:
        return {
            ...state,
            isLoading:false,
            products:payload
        }; 
    case types.ADD_CART:
        const item = payload;

        const isItemExist = state.cart.find(
          (i) => i.id === item.id
        );
  
        if (isItemExist) {
          return {
            ...state,
            cart: state.cart.map((i) =>
              i.id === isItemExist.id ? item : i
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, item],
          };
        }

        case types.REMOVE_CART_ITEM:
          return {
            ...state,
            cart: state.cart.filter((i) => i.id !== payload),
          };
    
     
    case types.GET_FAILURE:
        return {
            ...state,
            isLoading:false,
            isError:true,
        }
   
    default:
        return state;
   }
}