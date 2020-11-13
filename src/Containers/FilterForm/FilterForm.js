import React from "react";
import classes from "./FilterForm.module.css";
import FilterContainer from "../FilterContainer/FilterContainer";
import SortContainer from "../SortContainer/SortContainer";

const FilterForm = (props) => {
  return (
      <div className={classes.MainContainer}>
        <FilterContainer />
        <SortContainer />
      </div>
      
  );
};

export default FilterForm;
