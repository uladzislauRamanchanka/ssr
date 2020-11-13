import React from "react";
import classes from "./[Footer].module.css";
import NetflixRoulette from "../../Components/NetflixRoulette/NetflixRoulette";

const Footer = (props) => {
  return (
    <div className={classes.FooterWrapper}>
      <NetflixRoulette />
    </div>
  );
};

export default Footer;
