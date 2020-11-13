import React from "react";
import classes from "./CountContainer.module.css";
import ResultCount from "../../Components/ResultCount/ResultCount";

const CountContainer = (props) => {
  return (
    <div className={classes.CountContainer}>
      <ResultCount/>
    </div>
  );
};

export default CountContainer;
