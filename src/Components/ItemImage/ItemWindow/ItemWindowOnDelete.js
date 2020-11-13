import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../store/movieActions/actions";

const TitleWindow = styled.span`
  font-size: 30px;
  color: #fff;
  margin-bottom: 30px;
`;
const Content = styled.h3`
  color: #fff;
`;

const ModalFooter = styled.div`
  padding: 20px;
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

const FooterButton = styled.div`
  background-color: #f65261;
  border-radius: 2px;
  padding: 10px 55px;
  margin-right: 10px;
  cursor: pointer;
`;

const ItemWindowOnDelete = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <TitleWindow>{props.title}</TitleWindow>
      <Content>Are you sure you want to delete this item?</Content>
      <ModalFooter>
        <FooterButton
          onClick={() => {
            dispatch(deleteMovie(props.movie));
            const closeWindow = props.onCloseRequest;
            closeWindow();
          }}
        >
          CONFIRM
        </FooterButton>
      </ModalFooter>
    </>
  );
};

export default ItemWindowOnDelete;
