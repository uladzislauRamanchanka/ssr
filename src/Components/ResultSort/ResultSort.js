import React, { useState, useEffect } from "react";
import classes from "./ResultSort.module.css";
import styled from "styled-components";
import { sortBy } from "../../constants/const";
import { sortByValue, sortByOrder } from "../../store/movieActions/actions";
import { useDispatch } from "react-redux";
const Select = styled.select`
  font-size: 17px;
  color: #fff;
  background-color: #232323;
  opacity: 0.8;
  text-align-last: center;
  border: none;
  width: 145px;
  margin-right: 5px;
  -webkit-appearance: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const ResultSort = (props) => {
  const [asc, setAsc] = useState(false);
  const [value, setValue] = useState("release_date");
  const arrowStyles = [classes.arrow];
  if (asc) arrowStyles.push(classes.up);
  else arrowStyles.push(classes.down);
  const dispatch = useDispatch();

  const handleArrow = () => {
    setAsc(!asc)
    dispatch(sortByOrder(asc));
  }
  return (
    <>
      <div className={classes.Sort}>SORT BY:</div>
      <Select
        selected={value}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          dispatch(sortByValue(event.target.value));
        }}
      >
        {sortBy.map((item, index) => (
          <option key={index} value={item.key}>
            {item.value}
          </option>
        ))}
      </Select>
      <div className={classes.arrowWrap}>
        <div
          className={arrowStyles.join(" ")}
          onClick={handleArrow}
        ></div>
      </div>
    </>
  );
};

export default ResultSort;
