import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/general/Home";
import Menu from "../pages/general/Menu";
import PageNotFound from "../pages/general/PageNotFound";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route className="" path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
