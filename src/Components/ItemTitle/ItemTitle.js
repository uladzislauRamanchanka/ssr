import React from "react";
import classes from "./ItemTitle.module.css";

const ItemTitle = (props) => (
  <div className={classes.ItemTitle}>{props.name}</div>
);

ItemTitle.defaultProps = {
  name: 'Default Title'
}

export default ItemTitle;
