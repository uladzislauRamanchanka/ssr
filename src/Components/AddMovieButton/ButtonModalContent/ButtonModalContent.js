import React from "react";
import styled from "styled-components";
import AddFormContainer from '../../Formik/AddFormContainer'

const TitleWindow = styled.span`
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
`;

const ButtonModalContent = (props) => {
  return (
    <>
      <TitleWindow>{props.title}</TitleWindow>
      <AddFormContainer cancelEvent={props.onCloseRequest}/>
    </>
  );
};

export default ButtonModalContent;
