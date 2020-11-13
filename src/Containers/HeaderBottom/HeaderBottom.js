import React from "react";
import classes from "./HeaderBottom.module.css";
import Search from "../../Components/Search/Search";

const HeaderBottom = (props) => {
  return (
    <div className={classes.headerBottom}>
      <div className={classes.titleForm}>
        <h1>FIND YOUR MOVIE</h1>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default HeaderBottom;
