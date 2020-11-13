import * as actions from "./actionTypes";
import axios from "axios";
import { formLink } from "../utils";

const url = "http://localhost:4000/movies";

export const moviesFetching = () => {
  return {
    type: actions.FETCH_MOVIE_REQUEST,
  };
};

export const setMovieDescription = (movie) => {
  return {
    type: actions.MOVIE_DESCRIPTION,
    payload: movie,
  };
};

export const moviesFetchedSuccess = (movies) => {
  return {
    type: actions.FETCH_MOVIE_SUCCESS,
    payload: movies,
  };
};

export const moviesFetchedError = (error) => {
  return {
    type: actions.FETCH_MOVIE_ERROR,
    payload: error,
  };
};

export const updateMovieAction = (movie) => {
  return {
    type: actions.MOVIE_UPDATE,
    payload: movie,
  };
};

export const deleteMovieAction = (movie) => {
  return {
    type: actions.MOVIE_DELETE,
    payload: movie,
  };
};

export const createMovieAction = (movie) => {
  return {
    type: actions.MOVIE_CREATE,
    payload: movie,
  };
};

export const setActiveGenre = (genre) => {
  return {
    type: actions.MOVIE_GENRE,
    payload: genre,
  };
};

export const setSortBy = (sortBy) => {
  return {
    type: actions.MOVIE_SORT_BY,
    payload: sortBy,
  };
};

export const setAscDesc = (ascDescValue) => {
  return {
    type: actions.MOVIE_ASC_DESC,
    payload: ascDescValue,
  };
};

export const setTitle = (titleQuery) => {
  return {
    type: actions.MOVIE_SEARCH_BY_TITLE,
    payload: titleQuery,
  };
};

export const fetchMovies = (searchParams) => async (dispatch) => {
  try {
    const params = formLink(searchParams);
    const fullUrl = `${url}${params}`;
    dispatch(moviesFetching());
    const { data } = await axios.get(`${fullUrl}`);
    dispatch(moviesFetchedSuccess(data));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const updateMovie = (movie) => async (dispatch, getState) => {
  try {
    await axios.put(url, movie);
    dispatch(updateMovieAction(movie));
    const {
      movie: { searchParams },
    } = getState();

    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const deleteMovie = (movieToDelete) => async (dispatch, getState) => {
  try {
    await axios.delete(`${url}/${movieToDelete.id}`);
    dispatch(deleteMovieAction(movieToDelete));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const createMovie = (movie) => async (dispatch, getState) => {
  try {
    await axios.post(url, movie);
    dispatch(createMovieAction(movie));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

// this part is gonna be refactored in one function
export const filterByGenre = (genre) => async (dispatch, getState) => {
  try {
    dispatch(setActiveGenre(genre));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const sortByValue = (sortBy) => async (dispatch, getState) => {
  try {
    dispatch(setSortBy(sortBy));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const sortByOrder = (orderValue) => async (dispatch, getState) => {
  try {
    dispatch(setAscDesc(orderValue));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};

export const searchByTitle = (titleQuery) => async (dispatch, getState) => {
  try {
    dispatch(setTitle(titleQuery));
    const {
      movie: { searchParams },
    } = getState();
    dispatch(fetchMovies(searchParams));
  } catch (error) {
    dispatch(moviesFetchedError(error.message));
  }
};
