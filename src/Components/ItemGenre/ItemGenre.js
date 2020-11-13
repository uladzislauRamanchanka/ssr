import React from "react";
import classes from "./ItemGenre.module.css";

const ItemGenre = (props) => (
  <div className={classes.ItemGenre}>{props.genre}</div>
);

export default ItemGenre;
