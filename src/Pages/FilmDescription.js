import React from "react";
import HeaderMainContainer from "../Containers/HeaderMainContainer/HeaderMainContainer";
import MovieDetailsContainer from "../Containers/MovieDetailsContainer/MovieDetailsContainer";
import MainContent from "../Containers/MainContent/MainContent";
import Footer from "../Containers/Footer/Footer";
import { useParams } from "react-router-dom";

function FilmDescription(props) {
  const { id } = useParams();
  return (
    <>
       { id ? <MovieDetailsContainer /> : null}
      <MainContent />
      <Footer />
    </>
  );
}

export default FilmDescription;
