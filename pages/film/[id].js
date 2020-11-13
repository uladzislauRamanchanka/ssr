import React from "react";
import MovieDetailsContainer from "../../src/Containers/MovieDetailsContainer/MovieDetailsContainer";
import MainContent from "../../src/Containers/MainContent/MainContent";
import Footer from "../../src/Containers/Footer/Footer";
import {useRouter} from 'next/router'

function FilmDescription(props) {
  const router = useRouter()
  return (
    <>
       { router.query.id ? <MovieDetailsContainer /> : null}
      <MainContent />
      <Footer />
    </>
  );
}

export default FilmDescription;