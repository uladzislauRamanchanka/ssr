import React from "react";
import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import { movies } from "../../constants/const";

describe("test actions", () => {
  describe("test sync actions", () => {
    it("moviesFetching", () => {
      const expectedAction = {
        type: actionTypes.FETCH_MOVIE_REQUEST,
      };
      expect(actions.moviesFetching()).toEqual(expectedAction)
    });

    it("setMovieDescription", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_DESCRIPTION,
          payload: movies.data[0]
        };
        const objDescription = movies.data[0]
        expect(actions.setMovieDescription(objDescription)).toEqual(expectedAction)
      });

      it("moviesFetchedSuccess", () => {
        const expectedAction = {
          type: actionTypes.FETCH_MOVIE_SUCCESS,
          payload: movies.data
        };
        expect(actions.moviesFetchedSuccess(movies.data)).toEqual(expectedAction)
      });

      it("moviesFetchedError", () => {
        const expectedAction = {
          type: actionTypes.FETCH_MOVIE_ERROR,
          payload: 'error'
        };
        expect(actions.moviesFetchedError('error')).toEqual(expectedAction)
      });

      it("updateMovieAction", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_UPDATE,
          payload: movies.data[0]
        };
        expect(actions.updateMovieAction(movies.data[0])).toEqual(expectedAction)
      });

      it("deleteMovieAction", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_DELETE,
          payload: movies.data[0]
        };
        expect(actions.deleteMovieAction(movies.data[0])).toEqual(expectedAction)
      });

      it("createMovieAction", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_CREATE,
          payload: movies.data[2]
        };
        expect(actions.createMovieAction(movies.data[2])).toEqual(expectedAction)
      });

      it("setActiveGenre", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_GENRE,
          payload: 'COMEDY'
        };
        expect(actions.setActiveGenre('COMEDY')).toEqual(expectedAction)
      });

      it("setSortBy", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_SORT_BY,
          payload: 'release_date'
        };
        expect(actions.setSortBy('release_date')).toEqual(expectedAction)
      });

      it("setAscDesc", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_ASC_DESC,
          payload: true
        };
        expect(actions.setAscDesc(true)).toEqual(expectedAction)
      });

      it("setTitle", () => {
        const expectedAction = {
          type: actionTypes.MOVIE_SEARCH_BY_TITLE,
          payload: 'test'
        };
        expect(actions.setTitle('test')).toEqual(expectedAction)
      });
  });
});
