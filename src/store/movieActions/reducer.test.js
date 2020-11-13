import React from "react";
import reducer, { initialState } from "./reducer";
import * as actions from "./actionTypes";
import { movies } from "../../constants/const";

describe("test reducer", () => {
  describe("test Reducer Fetch", () => {
    it("FETCH_MOVIE_REQUEST", () => {
      const action = {
        type: actions.FETCH_MOVIE_REQUEST,
      };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        isLoading: true,
      });
    });

    it("FETCH_MOVIE_SUCCESS", () => {
      const initialTestState = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: actions.FETCH_MOVIE_SUCCESS,
        payload: movies,
      };

      const state = reducer(initialTestState, action);

      expect(state).toEqual({
        ...initialTestState,
        isLoading: false,
        isLoaded: true,
        amount: action.payload.totalAmount,
        data: action.payload.data,
        error: "",
      });
      expect(state.amount).toEqual(movies.data.length);
      expect(state.data).toEqual(movies.data);
    });

    it("FETCH_MOVIE_ERROR", () => {
      const initialTestState = {
        ...initialState,
        isLoading: true,
      };

      const action = {
        type: actions.FETCH_MOVIE_ERROR,
        payload: "error",
      };

      const state = reducer(initialTestState, action);

      expect(state).toEqual({
        ...initialTestState,
        error: "error",
      });

      expect(state.error).toBe("error");
    });
  });

  describe("test reducer CRUD", () => {
    it("should update the movie by ID", () => {
      const initialTestState = {
        ...initialState,
        isLoading: false,
        isLoaded: true,
        amount: movies.totalAmount,
        data: movies.data,
      };

      const updatedMovie = {
        id: 1,
        photoUrl: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/17155901-1124517.jpg',
        year: '2001',
        name: 'Name0',
        tagline: 'Some tagline',
        genres: [
          'Genre1','Genre2'
        ],
        voteAverage: 5.5,
        runtime: 120,
        overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape."
      }

      const action = {
        type: actions.MOVIE_UPDATE,
        payload: updatedMovie
      }

      const state = reducer(initialTestState, action);

      expect(state.data[0].year).toBe(updatedMovie.year)
    });
  });

  describe("test reducer searchParams", () => {
    it("MOVIE_DESCRIPTION", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };

      const updatedMovie = movies.data[0];

      const action = {
        type: actions.MOVIE_DESCRIPTION,
        payload: updatedMovie
      }

      const state = reducer(initialTestState, action);

      expect(state.currentMovieDescription).toEqual(updatedMovie)
    });

    it("MOVIE_GENRE", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };

      const genre = 'COMEDY';
      const emptyGenre = 'ALL'

      const action = {
        type: actions.MOVIE_GENRE,
        payload: genre
      }

      const actionWithEmptyGenre = {
        type: actions.MOVIE_GENRE,
        payload: genre
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.activeGenre).toEqual(genre)
      expect(state.searchParams.activeGenre).toEqual(genre)
    });

    it("MOVIE_GENRE Empty", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };

      const genre = 'ALL';

      const action = {
        type: actions.MOVIE_GENRE,
        payload: genre
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.activeGenre).toBe('')
    });

    it("MOVIE_SORT_BY", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };

      const sortBy = 'release_date';

      const action = {
        type: actions.MOVIE_SORT_BY,
        payload: sortBy
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.sortType).toBe(sortBy)
    });

    it("MOVIE_ASC_DESC case: ASC", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };


      const action = {
        type: actions.MOVIE_ASC_DESC,
        payload: true
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.sortOrder).toBe('asc')
    });

    it("MOVIE_ASC_DESC case: DESC", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };


      const action = {
        type: actions.MOVIE_ASC_DESC,
        payload: false
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.sortOrder).toBe('desc')
    });

    it("MOVIE_SEARCH_BY_TITLE", () => {
        const initialTestState = {
            ...initialState,
            isLoading: false,
            isLoaded: true,
            amount: movies.totalAmount,
            data: movies.data,
          };


      const action = {
        type: actions.MOVIE_SEARCH_BY_TITLE,
        payload: 'test'
      }

      const state = reducer(initialTestState, action);

      expect(state.searchParams.searchString).toBe('test')
    });
  });

  describe('empty state', () => {
      it('should return empty initial state without action', () => {
          const initialTestState = {
              emptyState: true
          }
          const action = {
              type: 'empty Type'
          }
          const state = reducer(initialTestState, action);
          expect(state).toEqual(initialTestState)
      })
  })
});
