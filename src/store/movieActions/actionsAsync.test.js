import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import * as actions from "./actions";
import * as types from "./actionTypes";
import { movies } from "../../constants/const";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const searchParams = {
  sortType: "release_date",
  sortOrder: "desc",
  activeGenre: "",
  searchString: "",
  limit: 18,
};

describe("async actions test", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("fetchMovies action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const expectedActions = [
      { type: types.FETCH_MOVIE_REQUEST },
      { type: types.FETCH_MOVIE_SUCCESS, payload: movies },
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovies(searchParams)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("fetchMovies action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const expectedActions = [
      {
        type: types.FETCH_MOVIE_ERROR,
        payload: "Cannot read property 'sortType' of undefined",
      },
    ];

    const store = mockStore({});

    return store.dispatch(actions.fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("updateMovie action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.updateMovie(movies.data[0])).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_UPDATE");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("updateMovie action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.updateMovie(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("deleteMovie action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.deleteMovie(movies.data[0])).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_DELETE");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("deleteMovie action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.deleteMovie(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("createMovie action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.createMovie(movies.data[0])).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_CREATE");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("createMovie action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.createMovie(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("filterByGenre action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.filterByGenre("COMEDY")).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_GENRE");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("filterByGenre action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.filterByGenre(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("sortByValue action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.sortByValue("release_date")).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_SORT_BY");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("sortByValue action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.sortByValue(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("sortByOrder action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.sortByOrder(true)).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_ASC_DESC");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("sortByOrder action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.sortByOrder(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });

  it("searchByTitle action test", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });

    const store = mockStore({
      movie: {
        searchParams: {
          ...searchParams,
        },
      },
    });
    return store.dispatch(actions.searchByTitle("test")).then(() => {
      expect(store.getActions()[0].type).toEqual("MOVIE_SEARCH_BY_TITLE");
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_REQUEST");
    });
  });

  it("searchByTitle action test error", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: movies,
      });
    });
    const store = mockStore({});
    return store.dispatch(actions.searchByTitle(movies.data[0])).then(() => {
      expect(store.getActions()[1].type).toEqual("FETCH_MOVIE_ERROR");
    });
  });
});
