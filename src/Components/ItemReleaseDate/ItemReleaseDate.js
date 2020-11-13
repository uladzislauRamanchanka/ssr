import React from "react";
import classes from "./ItemReleaseDate.module.css";

const ItemReleaseDate = (props) => (
  <div><div className={classes.ItemReleaseDate}>{props.year}</div></div>
);

export default ItemReleaseDate;
