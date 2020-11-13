import React from "react";
import styled from "styled-components";
import NetflixRoulette from "../Components/NetflixRoulette/NetflixRoulette";
import Error from "../images/notFound.jpg";
import { Link } from "react-router-dom";

const Header = styled.div`
  background-color: #232323;
  height: 30px;
  display: flex;
`;
const MainContent = styled.div`
  background-color: #232323;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PageTitle = styled.h1`
  color: white;
  margin: 0;
  padding: 0;
`;
const Image = styled.img.attrs({
  src: Error,
})`
  width: 450px;
  margin-top: 20px;
`;

const Footer = styled.div`
  background-color: #555555;
  height: 55px;
  display: flex;
  justify-content: center;
`;

const GoHome = styled.div`
  width: 120px;
  padding: 8px 10px;
  background-color: #555555;
  border-radius: 5px;
  border: 2px solid #f65261;
  color: #f65261;
  cursor: pointer;
  text-align: center;
`;

function PageNotFound(props) {
  return (
    <>
      <Header>
        <NetflixRoulette />
      </Header>
      <MainContent>
        <div>
          <PageTitle>Page Not Found</PageTitle>
        </div>

        <div>
          <Image />
        </div>
        <Link to="/">
          <GoHome>Go Back To Home</GoHome>
        </Link>
      </MainContent>
      <Footer>
        <NetflixRoulette />
      </Footer>
    </>
  );
}

export default PageNotFound;
