import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #232323;
  color: white;
`;
const Text = styled.h1`
  padding: 0;
  margin: 0;
`;

function NoMoviesFound(props) {
  return (
    <>
      <Wrapper>
        <Text>No Movies Found</Text>
      </Wrapper>
    </>
  );
}

export default NoMoviesFound;
