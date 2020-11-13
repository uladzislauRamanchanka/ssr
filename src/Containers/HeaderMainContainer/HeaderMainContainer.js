import React from "react";
import classes from "./HeaderMainContainer.module.css";
import HeaderUp from "../HeaderUp/HeaderUp";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

const HeaderContainer = (props) => {
  return (
    <div className={classes.mainBlock}>
      <HeaderUp />
      <HeaderBottom />
    </div>
  );
};

export default HeaderContainer;
