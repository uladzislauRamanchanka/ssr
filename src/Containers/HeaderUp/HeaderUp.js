import React from "react";
import classes from "./HeaderUp.module.css";
import NetflixRoulette from "../../Components/NetflixRoulette/NetflixRoulette";
import AddMovieButton from "../../Components/AddMovieButton/AddMovieButton";
import ReturnButton from "../../Components/ReturnButton/ReturnButton";

const HeaderUp = (props) => {
  return (
    <div className={classes.headerUp}>
      <NetflixRoulette />
      {props.returnButton ? (
        <ReturnButton />
      ) : (
        <AddMovieButton />
      )}
    </div>
  );
};

export default HeaderUp;
