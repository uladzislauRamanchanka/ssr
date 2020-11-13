import React, { useState } from "react";
import classes from "./FilterContainer.module.css";
import FilterItem from "../../Components/FilterItem/FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre } from "../../store/movieActions/actions";

const FilterContainer = (props) => {
  const genres = {
    filterItemNames: [
      { name: "ALL"},
      { name: "ROMANCE"},
      { name: "COMEDY"},
      { name: "HORROR"},
      { name: "CRIME"},
      { name: "DRAMA"},
    ],
  };
  
  const [activeTab, setActiveTab] = useState(0);
  
  const dispatch = useDispatch();
  const handleGenre = (index, genre) => {
    setActiveTab(index);
    dispatch(filterByGenre(genre));
  };
  return (
    <div className={classes.FilterContainer}>
      {genres.filterItemNames.map((item, index) => (
        <FilterItem
          name={item.name}
          key={index}
          isActive={index === activeTab ? "Active" : ""}
          setActive={() => handleGenre(index, item.name)}
        />
      ))}
    </div>
  );
};

export default FilterContainer;
