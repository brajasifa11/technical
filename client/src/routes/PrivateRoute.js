import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/index";

const PrivateRoute = ({ children, abc, ...rest }) => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateRoute;
