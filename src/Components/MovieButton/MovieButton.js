import React from "react";
import containerStyles from "../ItemImage/ItemImage.module.css";

const MovieButton = (props) => (
  <>
    <img
      src='/buttonSvg.svg'
      className={containerStyles.MovieButton}
      onClick={props.CloseWindow}
    />
  </>
);

export default MovieButton;
