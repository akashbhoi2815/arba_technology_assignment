import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../PrivateRoutes/Auth";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import AllProducts from "../Pages/AllProducts";
import Profile from "../Pages/Profile";
import SharedLayout from "./SharedLayout";
import Coding from "../Pages/Coding";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/code"
            element={
              <Auth>
                <Coding />
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
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
