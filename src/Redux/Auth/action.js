import * as types from "./actionTypes"



export const login = (payload) =>  (dispatch) => {
      dispatch({ type: types.LOGIN_REQUEST });;
      return  fetch(`https://fakestoreapi.com/auth/login`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(payload)
       }
      ).then((res)=>res.json())
      .then(({token})=>{
        localStorage.setItem('token',JSON.stringify(token))
       return dispatch({ type: types.LOGIN_SUCCESS, payload: token });
      }).catch((error)=>{
         dispatch({ type: types.LOGIN_FAIL, payload: error });
      });
  };
     
  // Register
  export const register = (userData) => (dispatch) => {
      dispatch({ type: types.REGISTER_USER_REQUEST });
      return fetch.post(`https://fakestoreapi.com/auth/login`,userData).then(({data})=>{
      return dispatch({ type: types.REGISTER_USER_SUCCESS, payload: data });
     }).catch((error)=>{
      dispatch({
        type: types.REGISTER_USER_FAIL,
        payload: error
      });
     });   
  
  };
  

  
  // Logout User
  export const logout = () => async (dispatch) => {
    try {
      await fetch.get(``);
  
      dispatch({ type: types.LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: types.LOGOUT_FAIL, payload: error });
    }
  };
  

  
// .response.data.msg