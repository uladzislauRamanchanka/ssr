import React from "react";
import classes from "./FilterItem.module.css";
import PropTypes from "prop-types";

const FilterItem = (props) => {
  const { isActive, setActive } = props;
  const style = [classes.Link];
  if (isActive) style.push(classes.Active);

  return (
    <div className={style.join(" ")} onClick={setActive}>
      {props.name}
    </div>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default FilterItem;
