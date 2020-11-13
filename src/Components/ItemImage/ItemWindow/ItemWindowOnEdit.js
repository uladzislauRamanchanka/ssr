import React from "react";
import styled from "styled-components";
import UpdateFormContainer from "../../Formik/UpdateFormContainer";

const TitleWindow = styled.span`
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
`;

const ItemWindowOnEdit = ({ title, movie, onCloseRequest }) => {
  return (
    <>
      <TitleWindow>{title}</TitleWindow>
      <UpdateFormContainer movieValues={movie} cancelEvent={onCloseRequest} />
    </>
  );
};

export default ItemWindowOnEdit;
