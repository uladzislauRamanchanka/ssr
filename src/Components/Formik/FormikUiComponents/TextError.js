import React from "react";
import classes from "./formStyle.module.css";
function TextError(props) {
  return <span className={classes.error}>{props.children}</span>;
}

export default TextError;
