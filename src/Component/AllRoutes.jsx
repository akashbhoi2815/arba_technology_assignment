import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../PrivateRoutes/Auth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import AllProducts from "../Pages/AllProducts";
import Profile from "../Pages/Profile";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route
          path="/cart"
          element={
            <Auth>
              <Cart />
            </Auth>
          }
        />
        <Route
          path="/products"
          element={
            <Auth>
              <AllProducts />
            </Auth>
          }
        />
        <Route
          path="/profile"
          element={
            <Auth>
              <Profile />
            </Auth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
