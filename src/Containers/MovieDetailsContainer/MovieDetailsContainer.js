import React from "react";
import styled from "styled-components";
import HeaderUp from "../HeaderUp/HeaderUp";
import MovieDetailsContent from "../../Components/MovieDetailsContent/MovieDetailsContent";

const Container = styled.div`
  background-color: black;
`;
const MovieDetailsContainer = (props) => {
  return (
    <Container tabindex="-1">
      <HeaderUp returnButton></HeaderUp>
      <MovieDetailsContent></MovieDetailsContent>
    </Container>
  );
};

export default MovieDetailsContainer;
