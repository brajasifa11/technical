import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.scss";
import prosehatkemenkes from "../../../src/static/images/prosehatkemenkes.png";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <img
          className={classes.logo}
          src={prosehatkemenkes}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={classes.border}></div>
    </div>
  );
};
