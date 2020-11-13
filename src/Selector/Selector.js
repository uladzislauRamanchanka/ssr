import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 98%;
  padding: 1%;
  background-color: #555555;
  opacity: 0.8;
  border: #555555;
  border-radius: 5px;
  font-size: 15px;
  min-height: 35px;
  color: #fff;
`;

function Selector(props) {
  return (
    <Select
      onChange={props.onChange}
      onBlur={props.onBlur}
      multiple={props.multiple}
      id={props.id}
      name={props.name}
    >
      {props.values.map((item, index) => (
        <option key={index} value={item.value}>
          {item.value}
        </option>
      ))}
    </Select>
  );
}

export default Selector;
