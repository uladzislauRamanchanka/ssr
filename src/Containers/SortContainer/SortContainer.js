import React from "react";
import classes from "./SortContainer.module.css";
import ResultSort from "../../Components/ResultSort/ResultSort";

const SortContainer = (props) => {
  return (
    <div className={classes.SortContainer}>
      <ResultSort />
    </div>
  );
};

export default SortContainer;
